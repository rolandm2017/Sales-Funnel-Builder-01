import React from "react";

const header = props => {
	// TODO: Make the Footer ALWAYS appear at the bottom
	// todo: and the Header ALWAYS appear at the top

	return (
		<div>
			<p>Header</p>
			<button onClick={props.del}>Remove Header</button>
		</div>
	);
};

export default header;
