import React from "react";

import { connect } from "react-redux";

import styled from "styled-components";

const Div = styled.div`
	background-color: #7c98b3;
	margin: 0.5em;
	padding: 0.5em;
`;

const footer = props => {
	return (
		<div>
			<Div>
				{props.customText ? <p>{props.customText}</p> : <p>Footer</p>}

				{props.pg === 1 ? (
					<button onClick={props.del}>Remove Footer</button>
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

export default connect(mapStateToProps)(footer);
