import React from "react";

import { Link } from "react-router-dom";

import * as ROUTES from "../store/routes";

const Navigation = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={ROUTES.SIGN_IN}>Sign In</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={ROUTES.LANDING}>Landing</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={ROUTES.HOME}>Home</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={ROUTES.ACCOUNT}>Account</Link>
				</li>
			</ul>
			<ul>
				<li>
					<Link to={ROUTES.ADMIN}>Admin</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
