// https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Header";
import Headline from "./Headline";
import TextArea from "./TextArea";
import Image from "./Image";
import EmailField from "./EmailField";
import Footer from "./Footer";
// import headline from "./Headline";
// import image from "./Image";
// import emailField from "./EmailField";

import * as actionTypes from "../store/constants";

class Palette extends Component {
	// state = {
	// 	components: []
	// };

	// // Disabled non-Redux state code
	// addComponent(e) {
	// 	console.log(e.target.innerHTML);
	// 	if (e.target.innerHTML === "Header") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Header");
	// 		this.setState({ components: newComponent });
	// 	} else if (e.target.innerHTML === "Headline") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Headline");
	// 		this.setState({ components: newComponent });
	// 	} else if (e.target.innerHTML === "Text Area") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Text Area");
	// 		this.setState({ components: newComponent });
	// 	} else if (e.target.innerHTML === "Image") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Image");
	// 		this.setState({ components: newComponent });
	// 	} else if (e.target.innerHTML === "Email Field") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Email Field");
	// 		this.setState({ components: newComponent });
	// 	} else if (e.target.innerHTML === "Footer") {
	// 		let newComponent = [...this.state.components];
	// 		newComponent.push("Footer");
	// 		this.setState({ components: newComponent });
	// 	}
	// }

	// renderStateComponents(e) {
	// 	let toRender = [];

	// 	for (let i = 0; i < this.state.components.length; i++) {
	// 		if (this.state.components[i] === "Header") {
	// 			toRender.push(<Header key={i}></Header>);
	// 		} else if (this.state.components[i] === "Headline") {
	// 			toRender.push(<Headline key={i}></Headline>);
	// 		} else if (this.state.components[i] === "Text Area") {
	// 			toRender.push(<TextArea keys={i}></TextArea>);
	// 		} else if (this.state.components[i] === "Image") {
	// 			toRender.push(<Image keys={i}></Image>);
	// 		} else if (this.state.components[i] === "Email Field") {
	// 			toRender.push(<EmailField keys={i}></EmailField>);
	// 		} else if (this.state.components[i] === "Footer") {
	// 			toRender.push(<Footer keys={i}></Footer>);
	// 		}
	// 	}

	// 	return toRender;
	// }

	addComponent(e) {
		console.log(e.target.innerHTML);
		if (e.target.innerHTML === "Header") {
			this.props.header();
		} else if (e.target.innerHTML === "Headline") {
			this.props.headline();
		} else if (e.target.innerHTML === "Text Area") {
			this.props.textArea();
		} else if (e.target.innerHTML === "Image") {
			this.props.image();
		} else if (e.target.innerHTML === "Email Field") {
			this.props.emailField();
		} else if (e.target.innerHTML === "Footer") {
			this.props.footer();
		}
	}

	renderStateComponents(e) {
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
				<p>Debugging: {this.props.comp}</p>
				<button onClick={e => this.addComponent(e)}>Header</button>
				<button onClick={e => this.addComponent(e)}>Headline</button>
				<button onClick={e => this.addComponent(e)}>Text Area</button>
				<button onClick={e => this.addComponent(e)}>Image</button>
				<button onClick={e => this.addComponent(e)}>Email Field</button>
				<button onClick={e => this.addComponent(e)}>Footer</button>
				<div>{this.renderStateComponents()}</div>
				<Link to="/customizer">Go To Next Page</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components
	};
};

const mapDispatchToProps = dispatch => {
	return {
		header: () => dispatch({ type: actionTypes.HEADER }),
		headline: () => dispatch({ type: actionTypes.HEADLINE }),
		textArea: () => dispatch({ type: actionTypes.TEXT_AREA }),
		image: () => dispatch({ type: actionTypes.IMAGE }),
		emailField: () => dispatch({ type: actionTypes.EMAIL_FIELD }),
		footer: () => dispatch({ type: actionTypes.FOOTER })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
