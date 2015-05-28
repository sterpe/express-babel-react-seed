var PureRenderMixin = require('react/addons')
	.PureRenderMixin
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
		this.store && this.store.addListener(
			'change'
			, this.updateState
		);
	}
	, componentWillUnmount() {
		this.store && this.store.removeListener(
			'change'
			, this.updateState
		);
	}
};

exports.StandardPrelude = _.extend(
	{ }
	, PureRenderMixin
	, exports.DefaultStoreMixin
);
