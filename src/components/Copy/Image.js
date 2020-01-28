import React from "react";

import { connect } from "react-redux";

import cat from "../../assets/images/Cat-trilling.jpg";

const image = props => {
	// TODO: Connect the image to a database
	// TODO: Allow the user to upload an image to the database, one for each image component

	return (
		<div>
			{props.pg === 3 ? (
				<div>
					<img src={cat} alt="A cat" width="200" height="133" />
				</div>
			) : (
				<div>
					<p>Insert an image:</p>
					<input placeholder="No database connected yet"></input>
				</div>
			)}
			<p>{props.customText}</p>
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
