const React = require('react')
, Prelude = require('@mixins').Prelude
, store = require('./store')
, actionCreator = require('./action-creator')
, EmailRegistration = require('@components/email-registration')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [Prelude]
	, store
	, actionCreator
	, getState() {
		return {
			email: this.store.state
		};
	}
	, onChange(e) {
		this.actionCreator.onInputChange(e.target.value);
	}
	, onClick(e) {
		e.preventDefault();
		this.actionCreator.onSubmit();
	}
	, onKeyDown(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			this.actionCreator.onSubmit();
		}
	}
	, render
});

function render () {
	return (
		<EmailRegistration label="Email Address"
		  address={this.state.email.get("address")}
		  valid={this.state.email.get("valid")}
		  shouldValidate={this.state.email.get("shouldValidate")}
		  onChange={this.onChange}
		  onKeyDown={this.onKeyDown}
		  onClick={this.onClick}
		/>
	);
}
