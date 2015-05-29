const React = require('react')
, cx = require('classnames')
, EmailAddressFormContainer =
	require('../forms/email-address-form-container')
;

module.exports = React.createClass({
	displayName: __filename
	, shouldComponentUpdate() {
		// This component is structural only...
		// no need to update.
		return false;
	}
	, render() {
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
			        <EmailAddressFormContainer />
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});
