import React from "react";

import { connect } from "react-redux";

const image = props => {
	// TODO: Connect the image to a database
	// TODO: Allow the user to upload an image to the database, one for each image component

	return (
		<div>
			<p>Insert an image:</p>
			<input placeholder="No database connected yet"></input>
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

export default connect(mapStateToProps)(image);
