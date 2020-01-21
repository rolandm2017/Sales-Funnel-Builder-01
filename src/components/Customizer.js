import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

class Customizer extends Component {
	renderStateComponents(e) {
		// Is it really DRY enough having the same function in both Palette.js and Customizer.js?

		let toRender = [];

		for (let i = 0; i < this.props.comp.length; i++) {
			if (this.props.comp[i] === "Header") {
				toRender.push(<Header key={i}></Header>);
			} else if (this.props.comp[i] === "Headline") {
				toRender.push(<Headline key={i}></Headline>);
			} else if (this.props.comp[i] === "Text Area") {
				toRender.push(<TextArea keys={i}></TextArea>);
			} else if (this.props.comp[i] === "Image") {
				toRender.push(<Image keys={i}></Image>);
			} else if (this.props.comp[i] === "Email Field") {
				toRender.push(<EmailField keys={i}></EmailField>);
			} else if (this.props.comp[i] === "Footer") {
				toRender.push(<Footer keys={i}></Footer>);
			}
		}

		return toRender;
	}

	render() {
		return (
			<div>
				<p>Your Custom Elements</p>
				<p>Debugging: {this.props.comp}</p>

				{this.renderStateComponents()}
				<Link to="/">Back</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components
	};
};

export default connect(mapStateToProps)(Customizer);
