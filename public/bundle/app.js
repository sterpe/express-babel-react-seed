const React = require('react')
, App = require('@app')
;

module.exports = React.createClass({
	displayName: __filename
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
