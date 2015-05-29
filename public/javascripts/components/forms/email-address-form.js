const React = require('react')
, Mixins = require('../../mixins')
, StandardPrelude = Mixins.StandardPrelude
, cx = require('classnames')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, generateFormGroupClasses() {
		const shouldValidate = this.props.shouldValidate
		, valid = this.props.valid
		, address = this.props.address
		;
		return cx({
			"form-group": true
			, "has-success": valid && shouldValidate
			, "has-error": !valid && address && shouldValidate
			, "has-feedback": address && shouldValidate
		});
	}
	, generateGlyphiconClasses() {
		const shouldValidate = this.props.shouldValidate
		, valid = this.props.valid
		, address = this.props.address
		;
		return cx({
			"form-control-feedback": shouldValidate
			, "glyphicon": shouldValidate
			, "glyphicon-remove": !valid && address && shouldValidate
			, "glyphicon-ok": valid && address && shouldValidate
		});
	}
	, generateButtonClasses() {
		const shouldValidate = this.props.shouldValidate
		, valid = this.props.valid
		, address = this.props.address
		;
		return cx({
			"btn": true
			, "btn-default": !shouldValidate
			, "btn-danger": !valid && address && shouldValidate
			, "disabled": !valid && address && shouldValidate
			, "btn-success": valid && address && shouldValidate
		});
	}
	, render() {
		const formGroupClasses = this.generateFormGroupClasses()
		, glyphiconClasses = this.generateGlyphiconClasses()
		, buttonClasses = this.generateButtonClasses()
		;
		return (
			<form>
			  <div className={formGroupClasses}>
			    <label className="">{this.props.label}</label>
			    <div className="input-group">
			      <div className="input-group">
			        <span className="input-group-addon">@</span>
			        <input type="email"
			          className="form-control"
			          id=""
			          value={this.props.address}
			          onChange={this.props.onChange}
			          onKeyDown={this.props.onKeyDown}
			          placeholder="Enter email."
			        />
			        <span className={glyphiconClasses}
			          ariaHidden="true" />
			        <span id="" className="sr-only">(success)</span>
			      </div>
			      <span className="input-group-btn">
			        <button className={buttonClasses}
			          onClick={this.props.onClick}
			        >
			          Register
			        </button>
			      </span>
			    </div>
			  </div>
			</form>
		);
	}
});
