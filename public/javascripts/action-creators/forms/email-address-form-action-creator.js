const dispatcher = require('../../dispatcher')
, API  = require('../../WebAPIUtils')
, ActionTypes = require('../../constants/action-types')
, EmailAddressFormActions = ActionTypes.get("email-address-form-actions")
, Payload = require('payload').Payload
;

module.exports = {
	onSubmit() {
		const event = EmailAddressFormActions.get("input-submit")
		, payload = new Payload(event)
		;
		dispatcher.dispatch(payload);
		API.registerEmailAddress();
	}
	, onInputChange(s) {
		const event = EmailAddressFormActions.get("input-change")
		, payload = new Payload(event, s)
		;
		dispatcher.dispatch(payload);
	}
};
