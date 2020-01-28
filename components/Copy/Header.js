import React from "react";

import { connect } from "react-redux";

const header = props => {
	// TODO: Make the Footer ALWAYS appear at the bottom
	// todo: and the Header ALWAYS appear at the top

	return (
		<div>
			{props.customText ? <h3>{props.customText}</h3> : <h3>Header</h3>}
			{/* {props.pg === 1 ? <h3>Header</h3> : null}
			{props.pg === 2 ? <h3>Header: {props.customText}</h3> : null}
			{props.pg === 3 ? <h3>{props.customText}</h3> : null} */}
			{props.pg === 1 ? (
				<button onClick={props.del}>Remove Header</button>
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

export default connect(mapStateToProps)(header);
