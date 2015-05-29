module.exports = new (require('flux').Dispatcher)();
module.exports.register((payload) => console.log(payload));
