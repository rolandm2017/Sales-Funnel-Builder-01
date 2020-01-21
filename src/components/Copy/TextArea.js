import React, { Component } from "react";

class TextArea extends Component {
	setCopy(e) {
		// console.log(e.target.value);
		console.log(this.props);
		// this.setState({ copy: e.target.value });
	}

	// TODO: Link to state.copy property in placeholder text
	render() {
		return (
			<div>
				<p>Type your copy here</p>
				<input onChange={e => this.setCopy(e)}></input>
				<p>Placeholder Text</p>
				<button onClick={this.props.moveUp}>Move Section Up</button>
				<button onClick={this.props.moveDown}>Move Section Down</button>
				<button onClick={this.props.del}>Delete Section</button>
			</div>
		);
	}
}

export default TextArea;
