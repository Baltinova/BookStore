import React from "react";
import './style.css';

export default class Input extends React.Component {
	render() {
		let label = this.props.label,
			name = this.props.name,
			type = this.props.type,
			style = this.props.style || {},
			value = this.props.value,
			title = this.props.title;
		style.borderColor = this.props.isValid === undefined ? "": this.props.isValid ? "green" : "red";
		return(
			<div className="loginRow">
				<label htmlFor={name}>{label}</label>
				<input id={name} type={type} name = {name} value={value} style={style}
				       title={title} onChange={this.props.onChange}/>
			</div>
		);
	}
}