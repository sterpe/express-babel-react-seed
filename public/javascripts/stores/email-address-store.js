const FLUXStore = require('./').FLUXStore
, EmailAddressFormActions = require('../constants/action-types')
	.get("email-address-form-actions")
, initialState = {
	"address": ""
	, "valid": false
	, "shouldValidate": false
}
;

module.exports = new FLUXStore({
	constructor(){
		this.updateState(Immutable.Map(initialState));
	}
	, regex: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
	, updateEmailAddress(s) {
		const isValid = this.regex.test(s)
		;
		this.updateState(this.state.merge({
			"address": s
			, "valid": isValid
		}));
		if (!s) {
			this.updateState(this.state.set("shouldValidate", false));
		}
	}
	, clearSelf() {
		this.updateState(this.state.merge(initialState));
	}
	, setShouldValidateFlag() {
		if (this.state.get("address")) {
			this.updateState(this.state.set("shouldValidate", true));
		}
	}
	, getHandlers() {
		return [
			[EmailAddressFormActions.get("input-change"), this.updateEmailAddress]
			, [EmailAddressFormActions.get("input-submit"), this.setShouldValidateFlag]
			, [EmailAddressFormActions.get("ajax-success"), this.clearSelf]
		];
	}
});
