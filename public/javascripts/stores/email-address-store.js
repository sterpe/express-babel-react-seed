const FLUXStore = require('./').FLUXStore
, Immutable = require('immutable')
, regex = require('../constants/regexes').email
, ActionTypes = require('../constants/action-types')
, Actions = ActionTypes.get("email-address-form-actions")
, INPUT_CHANGE = Actions.get("input-change")
, INPUT_SUBMIT = Actions.get("input-submit")
, AJAX_SUCCESS = Actions.get("ajax-success")
, ADDRESS = "address"
, VALID = "valid"
, DO_VALIDATE = "shouldValidate"
, initialState = Immutable.Map({
	[ADDRESS]: ""
	, [VALID]: false
	, [DO_VALIDATE]: false
})
;

module.exports = new FLUXStore({
	constructor(){
		this.updateState(initialState);
	}
	, regex: regex
	, updateEmailAddress(s) {
		const isValid = this.regex.test(s)
		;
		this.merge({
			[ADDRESS]: s
			, [VALID]: isValid
		});
		if (!s) {
			this.set(DO_VALIDATE, false);
		}
	}
	, clearSelf() {
		this.merge(initialState);
	}
	, setShouldValidateFlag() {
		const address = this.get(ADDRESS)
		;
		if (address) {
			this.set(DO_VALIDATE, true);
		}
	}
	, getHandlers() {
		const handlers = []
		;
		handlers.push([INPUT_CHANGE
			, this.updateEmailAddress]);
		handlers.push([INPUT_SUBMIT
			, this.setShouldValidateFlag]);
		handlers.push([AJAX_SUCCESS
			, this.clearSelf]);

		return handlers;
	}
});
