const immutable = require('immutable')
, KV = require('@utils/keymirror')
, guid = __filename.replace(/^\//, "")
, Strings = require('./strings')
;

module.exports = Immutable.Map(KV(guid, [
	Strings.INPUT_CHANGE
	, Strings.INPUT_SUBMIT
	, Strings.AJAX_PENDING
	, Strings.AJAX_SUCCESS
	, Strings.AJAX_FAILURE
]));
