var React = require('react')
, StandardPrelude = require('../javascripts/mixins').StandardPrelude
, EmailForm = require('../javascripts/components/forms/email-address-form-container')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, render() {
		return (
			<div id="app">
				<EmailForm />
			</div>
		);
	}
});

$((e) => React.render(
	<module.exports />,
	$('#app-mount')[0]
));
