import React from "react";
import { Route } from "react-router-dom";

import "./App.css";

import Palette from "./components/Palette";
import Customizer from "./components/Customizer";

function App() {
	return (
		<div className="App">
			<Route path="/customizer" component={Customizer}></Route>

			<Route path="/" exact component={Palette}></Route>
		</div>
	);
}

export default App;
