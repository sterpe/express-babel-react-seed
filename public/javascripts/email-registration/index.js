const React = require('react')
, Prelude = require('@mixins').Prelude
, store = require('./store')
, actionCreator = require('./action-creator')
, Strings = require('./strings')
, ADDRESS = Strings.ADDRESS
, VALID = Strings.VALID
, DO_VALIDATE = Strings.DO_VALIDATE
, LABEL = Strings.LABEL
, PLACEHOLDER = Strings.PLACEHOLDER
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
		<EmailRegistration label={LABEL}
		  address={this.state.email.get(ADDRESS)}
		  valid={this.state.email.get(VALID)}
		  shouldValidate={this.state.email.get(DO_VALIDATE)}
		  onChange={this.onChange}
		  onKeyDown={this.onKeyDown}
		  onClick={this.onClick}
		  placeholder={PLACEHOLDER}
		/>
	);
}
