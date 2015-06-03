var through2 = require('through2')
, JAVASCRIPT_ROOT_DIR = process.env.JAVASCRIPT_ROOT_DIR
, path = require('path')
;

module.exports = function (file) {
	var cwd = process.cwd()
	, base = path.resolve(cwd, JAVASCRIPT_ROOT_DIR)
	, rel
	;
	file = file.replace(/(?:\/)?[^\/]*$/, "");
	rel = path.relative(file, base);
	return through2(function (buf, enc, next) {
		var regex =/(require[\s\n]*\([\s\n]*(?:'|"))\@([\w\-\$\.]*)/g
		, replacer = "$1" + "./" + rel + "/$2"
		;
		buf = buf.toString();
		buf = buf.replace(regex, replacer);
		this.push(buf);
		next();
	});
};
