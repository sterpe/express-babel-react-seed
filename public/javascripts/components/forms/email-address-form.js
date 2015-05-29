const React = require('react')
, StandardPrelude = require('../../mixins').StandardPrelude
, cx = require('classnames')
;

module.exports = React.createClass({
	displayName: __filename
	, mixins: [StandardPrelude]
	, render() {
		const glyphiconClasses = cx({
			"form-control-feedback": true
			, "glyphicon": this.props.shouldValidate
			, "glyphicon-remove": !this.props.valid && this.props.address
			, "glyphicon-ok": this.props.valid && this.props.address
		})
		, formGroupClasses = cx({
			"form-group": true
			, "has-success": this.props.valid && this.props.shouldValidate
			, "has-error": !this.props.valid && this.props.address && this.props.shouldValidate
			, "has-feedback": this.props.address && this.props.shouldValidate
		})
		;
		return (
			<form>
				<div className={formGroupClasses}>
					<label className="">{this.props.label}</label>
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
					</div>
					<span className={glyphiconClasses}
					  ariaHidden="true" />
					<span id="" className="sr-only">(success)</span>
				</div>
			</form>
		);
	}
});
