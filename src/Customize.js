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

class Customize extends Component {
	componentDidMount() {
		this.props.setPage(2);
		// console.log("[Customize.js] componentDidMount()");
	}

	installComponent(component, i) {
		// MAYBE going to rewrite renderStateComponents() to be shorter...
		// Function receives component=this.props.comp as an arg, which is a list of Components to render,
		// and the index number.
	}

	renderStateComponents() {
		// Is it really DRY enough having the same function in both Palette.js and Customize.js?
		let toRender = [];
		console.log("[Customize.js] renderStateComponents()]");

		for (let i = 0; i < this.props.comp.length; i++) {
			// FIXME: this.props.comp sometimes starts as "undefined"
			console.log("THIS.props.comp:", this.props.comp);

			// Check if "Header" is already in the array
			if (this.props.comp[i].type === "Header") {
				// this.installComponent(this.props.comp, i);
				// need this if block because toRender.push(<Header customText={this.props.copy[i].webCopy}></Header>)
				// renders an error, "cannot get .webcopy property of undefined" or something like that w/o it
				if (this.props.copy[i]) {
					toRender.unshift(
						<div>
							<Header
								key={i}
								uniqueId={this.props.comp[i].id}
								// This line is the reason the function repeats so much.
								// Without the if "if (this.props.copy[i]) {} else {}" blocks of code...
								// the customText property would render "cannot get .webcopy property of undefined"
								customText={this.props.copy[i].webCopy}
							></Header>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				} else {
					toRender.unshift(
						<div>
							<Header
								key={i}
								uniqueId={this.props.comp[i].id}
							></Header>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				}

				// TODO: Repeatedly reassure yourself that this if statement fixes the Infinite Loop problem.
				if (this.props.copy.length === 0) {
					// assigns a unique ID to each piece of copy entered into database
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Headline") {
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<Headline
								key={i}
								uniqueId={this.props.comp[i].id}
								customText={this.props.copy[i].webCopy}
							></Headline>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Headline
								key={i}
								uniqueId={this.props.comp[i].id}
							></Headline>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				}
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Text Area") {
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<TextArea
								key={i}
								uniqueId={this.props.comp[i].id}
								customText={this.props.copy[i].webCopy}
							></TextArea>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<TextArea
								key={i}
								uniqueId={this.props.comp[i].id}
							></TextArea>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				}
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Image") {
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<Image
								key={i}
								uniqueId={this.props.comp[i].id}
								customText={this.props.copy[i].webCopy}
							></Image>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
								placeholder={"Type your caption here..."}
							></input>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Image
								key={i}
								uniqueId={this.props.comp[i].id}
							></Image>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
								placeholder={"Type your caption here..."}
							></input>
						</div>
					);
				}
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Email Field") {
				// the Email Field section DOES NOT need an if/else block
				// because it does not have a "customText" property field
				toRender.push(
					<div>
						<EmailField
							key={i}
							uniqueId={this.props.comp[i].id}
						></EmailField>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (
				this.props.comp[i].type === "Footer" &&
				!this.props.comp.includes("Footer")
			) {
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<Footer
								key={i}
								uniqueId={this.props.comp[i].id}
								customText={this.props.copy[i].webCopy}
							></Footer>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Footer
								key={i}
								uniqueId={this.props.comp[i].id}
							></Footer>
							<input
								key={this.props.comp.length + i}
								associate={this.props.comp[i].id}
								onChange={e =>
									this.props.addCopy(
										e.target.value,
										this.props.comp[i].id
									)
								}
							></input>
						</div>
					);
				}
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
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
		// }

		return (
			<div>
				{/* <p>Debugging: {debugging}</p>
				<p>Debugging, page: {this.props.pg}</p> */}
				<h2>Your Custom Elements</h2>

				{this.renderStateComponents()}
				<Link to="/">Back</Link>
				<br />
				<Link to="/finalpage">Go To Third Step</Link>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components,
		pg: state.currentPage,
		copy: state.copy
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setPage: page =>
			dispatch({ type: actionTypes.PAGE_CHANGE, payload: page }),
		getNewStateVariable: stateId =>
			dispatch({ type: actionTypes.NEW_VAR, payload: stateId }),
		addCopy: (text, id) =>
			dispatch({
				type: actionTypes.ADD_COPY,
				payload: [text, id]
			})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
