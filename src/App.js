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

import LandingPage from "./components/Auth/Landing";
import SignUpPage from "./components/Auth/SignUp";
import SignInPage from "./components/Auth/SignIn";
import PasswordForgetPage from "./components/Auth/PasswordForget";
import HomePage from "./components/Auth/Home";
import AccountPage from "./components/Auth/Account";
import AdminPage from "./components/Auth/Admin";

import Navigation from "./components/Navigation";

import * as ROUTES from "./store/routes";

const Div = styled.div`
	padding: 0.5em;
	margin: 0.5em;
	border: 1px solid black;
	border-radius: 3px;
	background-color: #accbe1;
`;

function App(props) {
	return (
		<div className="App">
			<Div>
				<Navigation></Navigation>

				<hr />

				<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
				<Route path={ROUTES.SIGN_IN} component={SignInPage} />
				<Route
					path={ROUTES.PASSWORD_FORGET}
					component={PasswordForgetPage}
				/>
				<Route path={ROUTES.HOME} component={HomePage} />
				<Route path={ROUTES.ACCOUNT} component={AccountPage} />
				<Route path={ROUTES.ADMIN} component={AdminPage} />

				<Route path={props.siteURL} exact component={Public}></Route>
				<Route path="/finalpage" component={FinalPage}></Route>
				<Route path="/customize" component={Customize}></Route>
				<Route path="/styling" component={Styling}></Route>

				<Route path="/palette" component={Palette}></Route>
				<Route path="/" exact component={LandingPage}></Route>
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
