import React from "react";

import { connect } from "react-redux";

import cat from "../../assets/images/Cat-trilling.jpg";

import styled from "styled-components";

const Div = styled.div`
	background-color: #b8bec5;
	margin: 0.5em;
	padding: 0.5em;
`;

const image = props => {
	// TODO: Connect the image to a database
	// TODO: Allow the user to upload an image to the database, one for each image component

	return (
		<div>
			<Div>
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
						<button onClick={props.moveDown}>
							Move Section Down
						</button>
						<button onClick={props.del}>Delete Section</button>
					</div>
				) : null}
			</Div>
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
