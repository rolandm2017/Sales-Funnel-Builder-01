import React from "react";

import { connect } from "react-redux";

const footer = props => {
	// TODO: Make the Footer ALWAYS appear at the bottom
	// todo: and the Header ALWAYS appear at the top
	return (
		<div>
			{props.customText ? <p>{props.customText}</p> : <p>Footer</p>}

			{props.pg === 1 ? (
				<button onClick={props.del}>Remove Footer</button>
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

export default connect(mapStateToProps)(footer);
