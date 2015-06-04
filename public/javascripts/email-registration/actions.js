const immutable = require('immutable')
, KV = require('@utils/keymirror')
, Strings = require('./strings')
, guid = __filename.replace(/^\//, "")
;

module.exports = Immutable.Map(KV(guid, [
	Strings.INPUT_CHANGE
	, Strings.INPUT_SUBMIT
	, Strings.AJAX_PENDING
	, Strings.AJAX_SUCCESS
	, Strings.AJAX_FAILURE
]));
