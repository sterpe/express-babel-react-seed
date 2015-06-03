const dispatcher = require('@dispatcher')
, API  = require('@utils/WebAPIUtils')
, actions = require('./actions')
, Payload = require('payload').Payload
;

module.exports = {
	onSubmit() {
		const event = actions.get("input-submit")
		, payload = new Payload(event)
		;
		dispatcher.dispatch(payload);
		API.registerEmailAddress();
	}
	, onInputChange(s) {
		const event = actions.get("input-change")
		, payload = new Payload(event, s)
		;
		dispatcher.dispatch(payload);
	}
};
