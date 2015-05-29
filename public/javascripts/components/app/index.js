const React = require('react')
, Mixins = require('../../mixins')
, StandardPrelude = Mixins.StandardPrelude
, EmailAddressFormContainer =
	require('../forms/email-address-form-container')
, cx = require('classnames')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
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
