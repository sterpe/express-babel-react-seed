const dispatcher = require('../../dispatcher')
, WebAPIUtils  = require('../../WebAPIUtils')
, EmailAddressFormActions = require('../../constants/action-types')
	.get("email-address-form-actions")
, Payload = require('payload').Payload
;

module.exports = {
	onSubmit() {
		const event = EmailAddressFormActions.get("input-submit")
		, payload = new Payload(event)
		;
		dispatcher.dispatch(payload);
		WebAPIUtils.registerEmailAddress();
	}
	, onInputChange(s) {
		const event = EmailAddressFormActions.get("input-change")
		, payload = new Payload(event, s)
		;
		dispatcher.dispatch(payload);
	}
};
