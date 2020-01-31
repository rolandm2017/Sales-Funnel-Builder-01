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

class FinalPage extends Component {
	state = {
		domain: ""
	};

	componentDidMount() {
		this.props.setPage(3);
		document.title = "Sales Funnel Builder";
		// console.log("[Customize.js] componentDidMount()");
	}

	renderStateComponents() {
		// Is it really DRY enough having the same function in both Palette.js and Customize.js?
		let toRender = [];
		console.log("[FinalPage.js] renderStateComponents()]");

		for (let i = 0; i < this.props.comp.length; i++) {
			// FIXME: this.props.comp sometimes starts as "undefined"

			if (this.props.comp[i].type === "Header") {
				// this.installComponent(this.props.comp, i);
				// need this if block because toRender.push(<Header customText={this.props.copy[i].webCopy}></Header>)
				// renders an error, "cannot get .webcopy property of undefined" or something like that w/o it
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<Header
								key={i}
								uniqueId={this.props.comp[i].id}
								// This line is the reason the function repeats so much.
								// Without the if "if (this.props.copy[i]) {} else {}" blocks of code...
								// the customText property would render "cannot get .webcopy property of undefined"
								customText={this.props.copy[i].webCopy}
							></Header>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Header
								key={i}
								uniqueId={this.props.comp[i].id}
							></Header>
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
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Headline
								key={i}
								uniqueId={this.props.comp[i].id}
							></Headline>
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
						</div>
					);
				} else {
					toRender.push(
						<div>
							<TextArea
								key={i}
								uniqueId={this.props.comp[i].id}
							></TextArea>
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
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Image
								key={i}
								uniqueId={this.props.comp[i].id}
							></Image>
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
			} else if (this.props.comp[i].type === "Footer") {
				if (this.props.copy[i]) {
					toRender.push(
						<div>
							<Footer
								key={i}
								uniqueId={this.props.comp[i].id}
								customText={this.props.copy[i].webCopy}
							></Footer>
						</div>
					);
				} else {
					toRender.push(
						<div>
							<Footer
								key={i}
								uniqueId={this.props.comp[i].id}
							></Footer>
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

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	submitDomain = () => {
		this.props.setURL(this.state.domain);
	};

	render() {
		return (
			<div>
				<h2>Ready To Render, Now Select A Domain Name...</h2>

				<input
					onChange={this.handleChange}
					name="domain"
					placeholder={"Choose a name for your site..."}
				></input>

				<button onClick={this.submitDomain}>Ready!</button>
				<p>Pick a domain name like "YourNewSite" or "MyCoolProduct".</p>
				{this.props.siteURL.length > 11 ? (
					<Link to={this.props.siteURL}>Go To Your New Site</Link>
				) : null}
				<br />
				<h5>Here's How Your Website Will Look:</h5>
				{this.renderStateComponents()}

				<Link to="/customize">Back</Link>
				<br />

				<p>Note: You lose your work if you refresh the page!</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		comp: state.components,
		pg: state.currentPage,
		copy: state.copy,
		siteURL: state.siteURL
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setPage: page =>
			dispatch({ type: actionTypes.PAGE_CHANGE, payload: page }),
		setURL: domain =>
			dispatch({ type: actionTypes.SET_URL, payload: domain })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FinalPage);
