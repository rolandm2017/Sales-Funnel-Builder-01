import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Palette from "./components/Palette";
import Customize from "./components/Customize";

function App() {
	return (
		<div className="App">
			<Route path="/customize" component={Customize}></Route>

			<Route path="/" exact component={Palette}></Route>
			<p>Note: You lose your work if you refresh the page!</p>
		</div>
	);
}

export default App;
