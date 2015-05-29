const React = require('react')
, Mixins = require('../javascripts/mixins')
, StandardPrelude = Mixins.StandardPrelude
, App = require('../javascripts/components/app')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, shouldComponentUpdate() {
		// Don't update at all...
		return false;
	}
	, render() {
		return (
			<App />
		);
	}
});

$((e) => React.render(
	<module.exports />,
	$('#app-mount')[0]
));
