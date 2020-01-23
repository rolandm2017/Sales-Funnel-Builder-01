// https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

import * as actionTypes from "../store/constants";

class Palette extends Component {
	componentDidMount() {
		this.props.setPage(1);
	}

	addComponent(e) {
		// starts the process of rendering a component to the DOM
		const headerArray = this.props.comp.filter(x => x.type === "Header");
		const footerArray = this.props.comp.filter(x => x.type === "Footer");

		if (e.target.innerHTML === "Header" && headerArray.length < 1) {
			// Redux dispatch methods
			this.props.header();
		} else if (e.target.innerHTML === "Headline") {
			this.props.headline();
		} else if (e.target.innerHTML === "Text Area") {
			this.props.textArea();
		} else if (e.target.innerHTML === "Image") {
			this.props.image();
		} else if (e.target.innerHTML === "Email Field") {
			this.props.emailField();
		} else if (e.target.innerHTML === "Footer" && footerArray.length < 1) {
			this.props.footer();
		} else {
			console.log("Error: Can only add one header/footer component");
		}
	}

	deleteComponent(typeAndId) {
		let tempArray = [...this.props.comp];
		let index;
		for (let i = 0; i < tempArray.length; i++) {
			if (tempArray[i].id === typeAndId[1]) {
				index = i;
			}
		}
		tempArray.splice(index, 1);
		this.props.delComponent(tempArray);
	}

	moveUp(typeAndId) {
		// typeAndId is an array where
		// typeAndId[0] === componentType & typeAndId[1] === componentUniqueId

		// return a new array of the state.components state to work with
		let tempArray = [...this.props.comp];
		if (tempArray.length <= 1) {
			console.log(
				"Error: Can't reorder components unless there is more than 1."
			);
			return null;
		}
		let index;
		// using this loop to find the correct index of the component to be swapped
		for (let i = 0; i < tempArray.length; i++) {
			if (tempArray[i].id === typeAndId[1]) {
				index = i;
			}
		}
		// prevent an error from occurring
		if (index === 0) {
			console.log(
				"Error: Can't move component up if it is last in the list."
			);
			// FIXME: Is there something better I can return or do here?
			return null;
		}

		let movingDown = tempArray[index - 1];
		tempArray[index - 1] = tempArray[index];
		tempArray[index] = movingDown;

		this.props.setNewComponents(tempArray);
	}

	moveDown(typeAndId) {
		let tempArray = [...this.props.comp];
		if (tempArray.length <= 1) {
			console.log(
				"Error: Can't reorder components unless there is more than 1."
			);
			return null;
		}
		let index;
		// using this loop to find the correct index of the component to be swapped
		for (let i = 0; i < tempArray.length; i++) {
			if (tempArray[i].id === typeAndId[1]) {
				index = i;
			}
		}
		// prevent an error from occurring
		if (index === tempArray.length - 1) {
			console.log(
				"Error: Can't move component down if it is last in the list."
			);
			// FIXME: Is there something better I can return or do here?
			return null;
		}
		let movingUp = tempArray[index + 1];
		tempArray[index + 1] = tempArray[index];
		tempArray[index] = movingUp;

		this.props.setNewComponents(tempArray);
	}

	renderStateComponents(e) {
		// Is it really DRY enough having the same function in both Palette.js and Customize.js?
		let toRender = [];

		for (let i = 0; i < this.props.comp.length; i++) {
			if (this.props.comp[i].type === "Header") {
				toRender.push(
					<Header
						key={i}
						uniqueId={this.props.comp[i].id}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></Header>
				);
			} else if (this.props.comp[i].type === "Headline") {
				toRender.push(
					<Headline
						key={i}
						uniqueId={this.props.comp[i].id}
						moveUp={() =>
							this.moveUp([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						moveDown={() =>
							this.moveDown([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></Headline>
				);
			} else if (this.props.comp[i].type === "Text Area") {
				toRender.push(
					<TextArea
						key={i}
						uniqueId={this.props.comp[i].id}
						moveUp={() =>
							this.moveUp([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						moveDown={() =>
							this.moveDown([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></TextArea>
				);
			} else if (this.props.comp[i].type === "Image") {
				toRender.push(
					<Image
						key={i}
						uniqueId={this.props.comp[i].id}
						moveUp={() =>
							this.moveUp([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						moveDown={() =>
							this.moveDown([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></Image>
				);
			} else if (this.props.comp[i].type === "Email Field") {
				toRender.push(
					<EmailField
						key={i}
						uniqueId={this.props.comp[i].id}
						moveUp={() =>
							this.moveUp([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						moveDown={() =>
							this.moveDown([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></EmailField>
				);
			} else if (this.props.comp[i].type === "Footer") {
				toRender.push(
					<Footer
						key={i}
						uniqueId={this.props.comp[i].id}
						moveUp={() =>
							this.moveUp([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						moveDown={() =>
							this.moveDown([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
						del={() =>
							this.deleteComponent([
								this.props.comp[i].type,
								this.props.comp[i].id
							])
						}
					></Footer>
				);
			}
		}

		return toRender;
	}

	render() {
		// let debugging = "";
		// for (let i = 0; i < this.props.comp.length; i++) {
		// 	// makes each element of the state.components array show up on the screen
		// 	debugging += this.props.comp[i].type;
		// 	debugging += this.props.comp[i].id;
		// 	debugging += " ";
		// }

		return (
			<div>
				{/* <p>Debugging: {debugging}</p>
				<p>Debugging, page: {this.props.pg}</p> */}

				<h2>Select Your Custom Elements</h2>
				<button onClick={e => this.addComponent(e)}>Header</button>
				<button onClick={e => this.addComponent(e)}>Headline</button>
				<button onClick={e => this.addComponent(e)}>Text Area</button>
				<button onClick={e => this.addComponent(e)}>Image</button>
				<button onClick={e => this.addComponent(e)}>Email Field</button>
				<button onClick={e => this.addComponent(e)}>Footer</button>
				<div>{this.renderStateComponents()}</div>
				<Link to="/customize">Go To Next Step</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components,
		pg: state.currentPage
	};
};

const mapDispatchToProps = dispatch => {
	return {
		header: () => dispatch({ type: actionTypes.HEADER }),
		headline: () => dispatch({ type: actionTypes.HEADLINE }),
		textArea: () => dispatch({ type: actionTypes.TEXT_AREA }),
		image: () => dispatch({ type: actionTypes.IMAGE }),
		emailField: () => dispatch({ type: actionTypes.EMAIL_FIELD }),
		footer: () => dispatch({ type: actionTypes.FOOTER }),
		setNewComponents: newOrder =>
			dispatch({ type: actionTypes.SET_NEW, payload: newOrder }),
		delComponent: del => dispatch({ type: actionTypes.DEL, payload: del }),
		setPage: page =>
			dispatch({ type: actionTypes.PAGE_CHANGE, payload: page })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Palette);
