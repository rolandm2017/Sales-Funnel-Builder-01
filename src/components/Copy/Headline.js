import React from "react";

const headline = props => {
	return (
		<div>
			<h1>Headline</h1>
			<button onClick={props.moveUp}>Move Section Up</button>
			<button onClick={props.moveDown}>Move Section Down</button>
			<button onClick={props.del}>Delete Section</button>
		</div>
	);
};

export default headline;
