import React from "react";

const footer = props => {
	// TODO: Make the Footer ALWAYS appear at the bottom
	// todo: and the Header ALWAYS appear at the top
	return (
		<div>
			<p>Footer</p>
			<button onClick={props.del}>Remove Footer</button>
		</div>
	);
};

export default footer;
