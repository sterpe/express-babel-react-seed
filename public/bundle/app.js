var React = require('react')
, StandardPrelude = require('../javascripts/mixins').StandardPrelude
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, render() {
		return (
			<div id="app">
			</div>
		);
	}
});

$((e) => React.render(
	<module.exports />,
	$('#app-mount')[0]
));
