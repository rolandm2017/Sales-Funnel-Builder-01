import React from "react";
import { Route } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";

import Palette from "./components/Palette";
import Customize from "./components/Customize";
import FinalPage from "./components/FinalPage";
import Public from "./components/Public";
import Styling from "./components/Styling";

function App(props) {
	return (
		<div className="App">
			<Route path={props.siteURL} exact component={Public}></Route>
			<Route path="/finalpage" component={FinalPage}></Route>
			<Route path="/customize" component={Customize}></Route>
			<Route path="/styling" component={Styling}></Route>

			<Route path="/" exact component={Palette}></Route>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		siteURL: state.siteURL
	};
};

export default connect(mapStateToProps)(App);
