const immutable = require('immutable')
, KV = require('@utils/keymirror')
, guid = __filename.replace(/^\//, "")
;

module.exports = Immutable.Map(KV(guid, [
	"input-change"
	, "input-submit"
	, "ajax-pending"
	, "ajax-success"
	, "ajax-failure"
]));
