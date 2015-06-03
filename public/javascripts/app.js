const React = require('react')
, cx = require('classnames')
, EmailRegistrationContainer = require('@email-registration')
;

module.exports = React.createClass({
	displayName: __filename
	, shouldComponentUpdate() {
		// This component is structural only...
		// no need to update.
		return false;
	}
	, render
});

function render() {
	return (
		<div id="app">
		  <div id="app-content"
		    className="container"
		  >
		    <div className="row">
		      <div className={cx({
		        "col-md-4": true
		        , "col-xs-4": true
		        })}
		      >
		        <EmailRegistrationContainer />
		      </div>
		    </div>
		  </div>
		</div>
	);
}
