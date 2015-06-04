const dispatcher = require('@dispatcher')
, API  = require('@utils/WebAPIUtils')
, actions = require('./actions')
, Strings = require('./strings')
, INPUT_CHANGE = Strings.INPUT_CHANGE
, INPUT_SUBMIT = Strings.INPUT_SUBMIT
, Payload = require('payload').Payload
;

module.exports = {
	onSubmit() {
		const event = actions.get(INPUT_SUBMIT)
		, payload = new Payload(event)
		;
		dispatcher.dispatch(payload);
		API.registerEmailAddress();
	}
	, onInputChange(s) {
		const event = actions.get(INPUT_CHANGE)
		, payload = new Payload(event, s)
		;
		dispatcher.dispatch(payload);
	}
};
