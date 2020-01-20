import React, { Component } from "react";

import { Link } from "react-router-dom";

class Customizer extends Component {
	render() {
		return (
			<div>
				<p>Your Custom Elements</p>
				<Link to="/">Back</Link>
			</div>
		);
	}
}

export default Customizer;
