const FLUXStore = require('@flux-store')
, regex = require('@constants/regexes').email
, Immutable = require('immutable')
, actions = require('./actions')
, Strings = require('./strings')
, INPUT_CHANGE = actions.get(Strings.INPUT_CHANGE)
, INPUT_SUBMIT = actions.get(Strings.INPUT_SUBMIT)
, AJAX_SUCCESS = actions.get(Strings.AJAX_SUCCESS)
, ADDRESS = Strings.ADDRESS
, VALID = Strings.VALID
, DO_VALIDATE = Strings.DO_VALIDATE
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
