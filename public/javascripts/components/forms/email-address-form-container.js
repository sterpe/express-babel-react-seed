const React = require('react')
, StandardPrelude = require('../../mixins').StandardPrelude
, emailAddressStore = require('../../stores/email-address-store')
, emailAddressFormActionCreator = require('../../action-creators/forms/email-address-form-action-creator')
, EmailAddressForm = require('./email-address-form')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, store: emailAddressStore
	, getState() {
		return {
			email: this.store.state
		};
	}
	, onChange(e) {
		emailAddressFormActionCreator.onInputChange(e.target.value);
	}
	, onClick(e) {
		e.preventDefault();
		emailAddressFormActionCreator.onSubmit();
	}
	, onKeyDown(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			emailAddressFormActionCreator.onSubmit();
		}
	}
	, render() {
		return (
			<EmailAddressForm label="Email Address"
			  address={this.state.email.get("address")}
			  valid={this.state.email.get("valid")}
			  shouldValidate={this.state.email.get("shouldValidate")}
			  onChange={this.onChange}
			  onKeyDown={this.onKeyDown}
			  onClick={this.onClick}
			/>
		);
	}
});
