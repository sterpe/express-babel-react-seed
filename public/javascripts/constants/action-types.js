const Immutable = require('immutable')
;

module.exports = Immutable.Map({
	"email-address-form-actions": Immutable.Map({
		"input-change": "!input-change@email-address-form-actions"
		, "input-submit": "!input-submit@email-address-form-actions"
		, "ajax-success": "!ajax-success@email-address-form-actions"
		, "ajax-failure": "!ajax-failure@email-address-form-actions"
		, "ajax-pending": "!ajax-pending@email-address-form-actions"
	})
});
