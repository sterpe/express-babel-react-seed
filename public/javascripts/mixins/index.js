const React = require('react/addons')
, PureRenderMixin = React.addons.PureRenderMixin
, _ = require('lodash')
;

exports.DefaultStoreMixin = {
	getInitialState() {
		return { };
	}
	, updateState() {
		this.setState(this.getState());
	}
	, componentWillMount(){
		this.store && this.updateState();
	}
	, componentDidMount() {
		const store = this.store
		, cb = this.updateState
		;
		if (store) {
			store.addListener('change', cb);
		}
	}
	, componentWillUnmount() {
		const store = this.store
		, cb = this.updateState
		;
		if (store) {
			store.removeListener('change', cb);
		}
	}
};

exports.Prelude = _.extend(
	{ }
	, PureRenderMixin
	, exports.DefaultStoreMixin
);
exports.StandardPrelude = exports.Prelude;
