import React, { Component } from "react";

class TextArea extends Component {
	state = {
		copy: ""
	};

	componentDidUpdate() {
		console.log(this.state);
	}

	setCopy(e) {
		console.log(e.target.value);
		this.setState({ copy: e.target.value });
	}

	render() {
		return (
			<div>
				<p>Type your copy here</p>
				<input onChange={e => this.setCopy(e)}></input>
				<p>{this.state.copy}</p>
			</div>
		);
	}
}

export default TextArea;
