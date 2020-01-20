import React, { Component } from "react";

class Palette extends Component {
	state = {
		elements: []
	};

	addComponent = e => {
		// https://stackoverflow.com/questions/42673817/passing-react-button-text-value-around/42674565
		console.log(e.target.innerHTML);
		if (e.target.innerHTML === "Header") {
			let newElements = [...this.state.elements];
			newElements.push("Header");
			this.setState({ elements: newElements });
		} else if (e.target.innerHTML === "Headline") {
			let newElements = [...this.state.elements];
			newElements.push("Headline");
			this.setState({ elements: newElements });
		} else if (e.target.innerHTML === "Text Area") {
			let newElements = [...this.state.elements];
			newElements.push("Text Area");
			this.setState({ elements: newElements });
		}
	};

	render() {
		let toRender = <div></div>;

		for (let i = 0; i < this.state.elements.length; i++) {
			console.log("Elements: ", this.state.elements);
			console.log(this.state.elements[i]);
			if (this.state.elements[i] === "Header") {
				toRender += (
					<div>
						<p>Header Component</p>
					</div>
				);
			} else if (this.state.elements[i] === "Headline") {
				toRender += <h1>Headline</h1>;
			} else if (this.state.elements[i] === "Text Area") {
				toRender += <p>Text Area</p>;
			}
		}

		return (
			<div className="palette-container">
				<div>
					<h3>Your Palette</h3>
					<ul>
						<button onClick={e => this.addComponent(e)}>
							Header
						</button>
						<button onClick={e => this.addComponent(e)}>
							Headline
						</button>
						<button onClick={e => this.addComponent(e)}>
							Text Area
						</button>
						<li>Image</li>
						<li>Email Capture Form</li>
						<li>Footer</li>
					</ul>
				</div>
				<div className="render-area">{toRender}</div>
			</div>
		);
	}
}

export default Palette;
