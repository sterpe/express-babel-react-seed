const $ = require('jquery')
, EmailAddressStore = require('./stores/email-address-store')
, emailAddressFormActions = require('./constants/action-types')
	.get("email-address-form-actions")
, printf = require('printf').printf
, Payload = require('payload').Payload
, dispatcher = require('./dispatcher')
;
module.exports = {
	registerEmailAddress() {
		const state = EmailAddressStore.state
		;

		printf("email %s valid %s"
			, state.get("address")
			, state.get("valid")
		);
		if (state.get("valid")) {
			printf("making an ajax request...");
			setTimeout(() => {
				const event = emailAddressFormActions.get("ajax-success")
				, payload = new Payload(event)
				;

				dispatcher.dispatch(payload);
			}, 200);
		}
	}
};
