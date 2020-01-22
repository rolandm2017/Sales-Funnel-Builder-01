import React, { Component } from "react";

import Headline from "./Headline";

import canvasCSS from "./Canvas.module.css"; // doesn't work

class Canvas extends Component {
	testCreateEl = () => {};

	// dragStartHandler = event => {
	// 	event.dataTransfer.setData("text/plain", event.target.id); // returns undefined ??
	// 	console.log(event);
	// };

	// dragendHandler = event => {};

	// dragEndHandler = event => {
	// 	console.log("Ended drag");
	// };

	// dragStart = event => {
	// 	event.dataTransfer.setData("text", event.target.id);
	// 	console.log("Drag started");
	// };

	// drop = event => {
	// 	const id = event.dataTransfer.getData("text");

	// 	const draggableElement = document.getElementById(id);
	// 	const dropzone = event.target;

	// 	dropzone.appendChild(draggableElement);

	// 	event.dataTransfer.clearData();

	// 	// if (event.target.id) {
	// 	// 	// TODO: when drop() fires, add whichever component was dragged into the DOM\
	// 	// 	// i.e.: user drags a "Headline" component into position, add a Headline component in Canvas.js
	// 	// 	// ALTERNATIVELY: Send a message to the Canvas component telling it to create a new section
	// 	// 	event.dataTransfer.getData("text");
	// 	// 	event.dataTransfer.clearData();
	// 	// }
	// };

	render() {
		return (
			<div className="canvas-container">
				<h3>Drag Elements Here</h3>
				<div className="canvas">
					<ul>
						<li>Empty Space 1</li>
						<div
							className={canvasCSS.slot}
							onDrop={this.drop}
							onDragStart={this.dragStartHandler}
							onDragOver={event => event.preventDefault()}
							onDragEnd={this.dragEndHandler}
						>
							{" "}
						</div>
						<li>Empty Space 2</li>
						<div className="slot"> </div>
						<li>Empty Space 3</li>
						<div className="slot"> </div>
						<li>Empty Space 4</li>
						<div className="slot"> </div>
					</ul>
				</div>
			</div>
		);
	}
}

export default Canvas;
