import React from "react";

const image = props => {
	return (
		<div>
			<p>Insert an image:</p>
			<input placeholder="No database connected yet"></input>
			<br />
			<button onClick={props.moveUp}>Move Section Up</button>
			<button onClick={props.moveDown}>Move Section Down</button>
			<button onClick={props.del}>Delete Section</button>
		</div>
	);
};

export default image;
