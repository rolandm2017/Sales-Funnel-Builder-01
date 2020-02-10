import React, { Component } from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import SignOutButton from "./Auth/SignOut";
import * as ROUTES from "../store/routes";
import * as actionTypes from "../store/constants";
import { withFirebase } from "./Firebase";

class Navigation extends Component {
	componentDidMount() {
		this.props.firebase.auth.onAuthStateChanged(authUser => {
			console.log("authUser:", authUser);
			authUser ? this.props.setAuth(authUser) : this.props.setAuth(null);
		});
	}

	// componentWillUnmount() {
	// 	this.listener();
	// }

	render() {
		return (
			<div>
				{this.props.authUser ? (
					<NavigationAuth />
				) : (
					<NavigationNonAuth />
				)}{" "}
			</div>
		);
	}
}

const NavigationAuth = ({ firebase }) => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.HOME}>Home</Link>
		</li>
		<li>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</li>
		<li>
			{/* <Link to={ROUTES.LANDING} onClick={firebase.doSignOut}>
				Sign Out
			</Link> */}
			<SignOutButton />
		</li>
	</ul>
);
const NavigationNonAuth = () => (
	<ul>
		<li>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</li>
		<li>
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</li>
	</ul>
);

const mapStateToProps = state => {
	return {
		authUser: state.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		setAuth: auth => dispatch({ type: actionTypes.SET_AUTH, payload: auth })
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withFirebase(Navigation));
