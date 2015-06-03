module.exports = function (guid, keys, obj = {}) {
	let i
	;
	for (i = 0; i < keys.length; ++i) {
		obj[keys[i]] = keys[i] + "@" + guid
	}

	return obj;
};
