import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import styled from "styled-components";

import Palette from "./components/Palette";
import Customize from "./components/Customize";
import FinalPage from "./components/FinalPage";
import Public from "./components/Public";
import Styling from "./components/Styling";

const Div = styled.div`
	padding: 0.5em;
	margin: 0.5em;
	border: 1px solid black;
	border-radius: 3px;
	background-color: #accbe1;
`;

// hex codes for color scheme:
// CBB992, EECE85, 74838E, 3D3947, DD5B69

function App(props) {
	return (
		<div className="App">
			<Div>
				<Route path={props.siteURL} exact component={Public}></Route>
				<Route path="/finalpage" component={FinalPage}></Route>
				<Route path="/customize" component={Customize}></Route>
				<Route path="/styling" component={Styling}></Route>

				<Route path="/" exact component={Palette}></Route>
			</Div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		siteURL: state.siteURL
	};
};

export default connect(mapStateToProps)(App);
