import React from "react";

import { connect } from "react-redux";

const emailField = props => {
	return (
		<div>
			<h3>Email Field</h3>
			<p>Email</p>
			<input placeholder="Your best email goes here..."></input>
			<p>First Name</p>
			<input placeholder="Your first name..."></input>
			<br />
			{props.pg === 1 ? (
				<div>
					<button onClick={props.moveUp}>Move Section Up</button>
					<button onClick={props.moveDown}>Move Section Down</button>
					<button onClick={props.del}>Delete Section</button>
				</div>
			) : null}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		comp: state.components,
		pg: state.currentPage
	};
};

export default connect(mapStateToProps)(emailField);
