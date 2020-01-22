import React, { Component } from "react";

import { connect } from "react-redux";

class TextArea extends Component {
	// setCopy(event) {
	// 	let copy = event.target.value;
	// 	this.props.setStateCopy(copy);
	// }

	// TODO: Link to state.copy property in placeholder text
	// TODO: Link one state.copy property to EACH input field in the DOM
	// ... That's a job for TOMORROW! :)

	// TODO: Get bigger better input fields (of custom size x by y)
	// TODO: Disable the moveUp, moveDown and delete buttons on pg 2, for all components
	render() {
		return (
			<div>
				<p>Text Area: Your Copy Goes Here</p>

				{/* {this.props.copy ? <p>{this.props.copy.webCopy}</p> : null} */}
				{this.props.pg === 1 ? (
					<div>
						<button onClick={this.props.moveUp}>
							Move Section Up
						</button>
						<button onClick={this.props.moveDown}>
							Move Section Down
						</button>
						<button onClick={this.props.del}>Delete Section</button>
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components,
		pg: state.currentPage,
		copy: state.copy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setStateCopy: copy => dispatch({ type: "SET_COPY", payload: copy })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
