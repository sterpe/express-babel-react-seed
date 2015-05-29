const printf = require('printf').printf
;
module.exports = new (require('flux').Dispatcher)();
module.exports.register((payload) =>
	printf("Dispatch: %s", JSON.stringify(payload)));
