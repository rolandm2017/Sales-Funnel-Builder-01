import React, { Component } from "react";

import { connect } from "react-redux";

class TextArea extends Component {
	render() {
		return (
			<div>
				{this.props.customText ? (
					this.props.customText
				) : (
					<p>Text Area: Your Copy Goes Here</p>
				)}

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
