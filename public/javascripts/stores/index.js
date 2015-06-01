const EventEmitter = require('events').EventEmitter
, dispatcher = require('../dispatcher')
, invariant = require('invariant')
, util = require('util')
, _ = require('lodash')
, test
;

test = function (Constructor) {
	const bool
	, s
	;
	bool = typeof Constructor === 'function';
	s = "No `constructor` in config object.";

	invariant(Constructor && bool, s);
}
exports.FLUXStore = ((config) => {
	let instance
	, Constructor = config.constructor
	, actions
	, prototype
	;

	invariant(Constructor && typeof Constructor === 'function'
		, "No property `constructor` in config object."
	);

	config.dispatcher = config.dispatcher || dispatcher
	delete config.constructor;
	
	util.inherits(Constructor, EventEmitter);
	prototype = Constructor.prototype;

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
		Constructor.prototype.set = function (property, value) {
			const nextState = this.state.set(property, value)
			;
			this.updateState(nextState);
		};
		Constructor.prototype.get = function (property) {
			return this.state.get(property);
		};
		Constructor.prototype.merge = function (obj) {
			const nextState = this.state.merge(obj)
			;
			this.updateState(nextState);
		};
		Constructor.prototype.waitFor = function () {
			const dispatcher = this.dispatcher
			, waitFor = dispatcher.waitFor
			, args = [].slice.call(arguments)
			;
			waitFor.apply(dispatcher, args);
		};

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
	instance.dispatchToken = instance.dispatcher.register(
		instance.dispatchHandler.bind(instance)
	);
	return instance;
});

