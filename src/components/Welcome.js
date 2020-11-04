import React from "react";

import { Link } from "react-router-dom";

import "./Welcome.css";

function Welcome() {
	return (
		<div>
			<div id="welcome__centering">
				<div>
					<h1>Welcome to SalesPages... A Funnel Builder</h1>
					<h2>
						Tired of paying $
						<span class="welcome__underline">3/month</span> for
						websites like Carrd.co and Clickfunnels?
					</h2>
					<h2>
						Have you ever said, "I'd like to use a{" "}
						<span class="welcome__underline">really bad</span> sales
						funnel builder"?
					</h2>
					<h3>
						<i>Then you've come to the right place.</i>
					</h3>
					<h4>(Click before you lose your chance.)</h4>
					<button id="welcome__button">
						<Link to="/palette">Start Building!</Link>
					</button>
					{/* TODO: Finish this when Bronze's websties are back online	 */}
				</div>
			</div>
		</div>
	);
}

export default Welcome;
