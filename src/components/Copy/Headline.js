import React from "react";

const headline = props => {
	return (
		<div>
			<h1>Headline</h1>
			<button onClick={event => this.moveUp(event)}>
				Move Section Up
			</button>
			<button onClick={event => this.moveDown(event)}>
				Move Section Down
			</button>
		</div>
	);
};

export default headline;
