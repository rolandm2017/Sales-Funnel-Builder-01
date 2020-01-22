import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Header from "./Copy/Header";
import Headline from "./Copy/Headline";
import TextArea from "./Copy/TextArea";
import Image from "./Copy/Image";
import EmailField from "./Copy/EmailField";
import Footer from "./Copy/Footer";

class Customize extends Component {
	componentDidMount() {
		this.props.setPage(2);
		console.log("[Customize.js] componentDidMount()");
	}

	renderStateComponents() {
		// Is it really DRY enough having the same function in both Palette.js and Customize.js?
		let toRender = [];
		console.log("[Customize.js] renderStateComponents()]");

		for (let i = 0; i < this.props.comp.length; i++) {
			// FIXME: this.props.comp sometimes starts as "undefined"
			console.log("Test: Is This Defined?", this.props.comp);
			// FIXME: infinite loop "Error: maximum update depth exceeded"
			if (this.props.comp[i].type === "Header") {
				console.log("component iteration:", this.props.comp[i].id);
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				// FIXME: write an if statement like "if this.props.copy.id === either current or last iteration...
				// FIXME (cont'd): ...skip this.props.getNewStateVariable"
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
				console.log("this.props.copy:", this.props.copy);
			} else if (this.props.comp[i].type === "Headline") {
				console.log("100:", this.props.comp[i].id);
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Text Area") {
				console.log("200:", this.props.comp[i].id);
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Image") {
				console.log("300:", this.props.comp[i].id);
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Email Field") {
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			} else if (this.props.comp[i].type === "Footer") {
				toRender.push(
					<div>
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
						<input
							key={this.props.comp.length + i}
							associate={this.props.comp[i].id}
						></input>
					</div>
				);
				if (this.props.copy.length === 0) {
					this.props.getNewStateVariable(this.props.comp[i].id);
				}
			}
		}

		return toRender;
	}

	render() {
		let debugging = "";
		for (let i = 0; i < this.props.comp.length; i++) {
			// makes each element of the state.components array show up on the screen
			debugging += this.props.comp[i].type;
			debugging += this.props.comp[i].id;
		}

		return (
			<div>
				<p>Debugging: {debugging}</p>
				<p>Debugging: {this.props.pg}</p>
				<h2>Your Custom Elements</h2>

				{this.renderStateComponents()}
				<Link to="/">Back</Link>
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
		setPage: page => dispatch({ type: "PAGE_CHANGE", payload: page }),
		getNewStateVariable: stateId =>
			dispatch({ type: "NEW_VAR", payload: stateId })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Customize);
