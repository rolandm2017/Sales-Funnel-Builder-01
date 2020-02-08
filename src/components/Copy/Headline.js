import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";

const Div = styled.div`
	background-color: #b8bec5;
	margin: 0.5em;
	padding: 0.5em;
`;

const headline = props => {
	return (
		<div>
			<Div>
				{props.customText ? (
					<h1>{props.customText}</h1>
				) : (
					<h1>Headline</h1>
				)}
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

export default connect(mapStateToProps)(headline);
