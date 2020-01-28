import React from "react";

import { connect } from "react-redux";

const footer = props => {
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
