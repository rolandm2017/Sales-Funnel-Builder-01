import * as actionTypes from "./constants";

let component = "";
let idIteration = null;
// let stateArray = [];
let tempCopy = [];

const initialState = {
	components: [],
	uniqueIdCounter: 0,
	currentPage: 1,
	copy: [],
	siteURL: "/salespage/",
	auth: null
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_COMPONENT:
			// let stateArray;
			let stateArray = [...state.components];
			console.log("state:", state);
			console.log("State Copy:", state.copy);
			component = action.payload[0]; // will be "Header", "Headline", "Text Area", "Image", "Email Field", "Footer"
			if (component === "Header") {
				// append "Header" component to the beginning of the list
				stateArray.unshift({
					type: component,
					id: state.uniqueIdCounter
				});
			} else {
				// push component to the end of the list
				stateArray.push({
					type: component,
					id: state.uniqueIdCounter
				});
			}
			idIteration = state.uniqueIdCounter + 1;

			return {
				...state,
				components: stateArray,
				uniqueIdCounter: idIteration,
				copy: [...state.copy, { webCopy: "", id: action.payload[1] }]
			};
		case actionTypes.SET_NEW:
			console.log("Activating SET_NEW");
			// uploads the newly reordered set of components to state
			let uploadNewOrder = [...action.payload];
			return {
				...state,
				components: uploadNewOrder
			};
		case actionTypes.DEL:
			console.log("activating DEL");
			// uploads the state less the deleted item
			let uploadShortened = [...action.payload];
			return {
				...state,
				components: uploadShortened
			};
		case actionTypes.PAGE_CHANGE:
			console.log("activating PAGE_CHANGE");

			// stateArray = [...state.components];
			return {
				...state,
				// action.payload is set in each page's ComponentDidMount()
				currentPage: action.payload
			};
		case actionTypes.NEW_VAR:
			console.log("activating NEW_VAR");
			// case "NEW_VAR" fires from Customize's renderStateComponents()
			// let stateArray = [...state.components];
			tempCopy = Object.assign([], state.copy); // avoids the TypeError bug with [...state.copy]
			// push an empty copy datapoint to state with a unique id to use in identifying which copy goes where in interface
			let newInputFieldNumber = { webCopy: "", id: action.payload };
			tempCopy.push(newInputFieldNumber);
			return {
				...state,
				// components: stateArray,
				copy: tempCopy
			};
		case actionTypes.ADD_COPY:
			console.log("activating ADD_COPY");
			// FIXME: This needs to be commented better
			// For instance, when does .ADD_COPY activate? And what does it do?
			tempCopy = [...state.copy]; // immutably copy state.copy
			let textToAdd = action.payload[0];
			let indexToFind = action.payload[1];

			for (let i = 0; i < tempCopy.length; i++) {
				if (tempCopy[i].id === indexToFind) {
					// Modify the JS object linked to the appropriate input field
					tempCopy[i] = { webCopy: textToAdd, id: indexToFind };
				}
			}
			return {
				...state,
				copy: tempCopy
			};
		case actionTypes.SET_URL:
			console.log("activating SET_URL");
			// TODO: handle cases like user entered www.etc.com and https://www.test.com
			let domain = action.payload;
			const notAllowed = [
				"https://www.",
				"www.",
				".",
				"www",
				"com",
				"net",
				"org",
				".com",
				".net",
				".org"
			];
			for (let i = 0; i < notAllowed.length; i++) {
				if (domain.includes(notAllowed[i])) {
					domain = domain.replace(notAllowed[i], "");
				}
			}
			return {
				...state,
				// components: stateArray,
				siteURL: "/salespage/" + domain
			};
		// case actionTypes.SET_START:
		// 	return {
		// 		...state
		// 	};
		// case actionTypes.SET_END:
		// 	return {
		// 		...state
		// 	};
		case actionTypes.SET_AUTH:
			return {
				...state,
				auth: action.payload
			};
		default:
			return state;
	}
};

// let moveFooter = components => {
// 	// Purpose: Moves the footer component to the end of the array if it is in the components list.
// 	// Step One: Remove all instances of the Footer component from the array.
// 	const withoutFooter = components.filter(x => x.type !== "Footer");
// 	// Step Two: If there was no Footer component in the array, return the array we started with.
// 	if (components.length === withoutFooter.length) {
// 		return components;
// 	}
// 	// Step Three: Get the footer component to add to the end of the filtered array
// 	const footer = components.filter(x => x.type === "Footer");
// 	// Step Four: Self explanatory. Add Footer component back to the end of the array.
// 	withoutFooter.push(footer[0]);
// 	return withoutFooter;
// };

export default reducer;
