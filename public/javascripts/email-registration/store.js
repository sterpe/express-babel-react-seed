const FLUXStore = require('@flux-store')
, regex = require('@constants/regexes').email
, Immutable = require('immutable')
, actions = require('./actions')
, INPUT_CHANGE = actions.get("input-change")
, INPUT_SUBMIT = actions.get("input-submit")
, AJAX_SUCCESS = actions.get("ajax-success")
, Strings = require('./strings')
, ADDRESS = require('./strings').ADDRESS
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
	, regex
	, constants: {
		ADDRESS
		, VALID
		, DO_VALIDATE
	}
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
