const EventEmitter = require('events').EventEmitter
, invariant = require('invariant')
, _ = require('lodash')
, util = require('util')
;

let dispatcher = require('../dispatcher')
;

exports.FLUXStore = ((config) => {
	let instance
	, Constructor = config.constructor
	, actions
	;

	invariant(Constructor && typeof Constructor === 'function'
		, "No property `constructor` in config object."
	);

	dispatcher = config.dispatcher || dispatcher
	delete config.constructor;
	delete config.dispatcher;
	
	util.inherits(Constructor, EventEmitter);

	if (config.getHandlers) {
		config.actions = config.getHandlers();
		actions = _.map(config.actions, (v, i) => v[1]);
		_.forEach(config, (v, k) => {
			const i = actions.indexOf(v)
			;
			if (i > -1) {
				actions[i] = k;
			}
		});
		Object.defineProperty(Constructor.prototype, 'state', {
			get() {
				return this._state;
			}
			, configurable: false
			, enumerable: true
		});
		Constructor.prototype.updateState = function (state) {
			this._state = state;
		};
		Constructor.prototype.waitFor = (() => dispatcher
			.waitFor.apply(dispatcher, [].slice.call(arguments)));

		Constructor.prototype.dispatchHandler = function (payload) {
			let handled = false
			, _default
			, i
			;
			const prevState = this.state
			;
			for (i = 0; i < this.actions.length; ++i) {
				let event = this.actions[i][0]
				, fn = this.actions[i][1]
				;
				if (event === "default") {
					_default = fn;
					continue;
				} else if (payload.actionType === event) {
					fn.apply(this, payload.arguments);
					handled = true;
					break;
				}
			}
			if (typeof _default === 'function' && (!handled)) {
				_default.apply(this, payload.arguments);
			}
			if (this.state !== prevState) {
				this.emit('change');
			}
		};
	}
	instance = _.extend(new Constructor(), config);
	if (config.getHandlers) {
		_.forEach(actions, (method, i) => {
			instance.actions[i][1] = instance[method];
		});
	}
	instance.dispatchToken = dispatcher.register(
		instance.dispatchHandler.bind(instance)
	);
	return instance;
});

