import * as actionTypes from "./constants";

let component = "";
let idIteration = null;
let stateArray = [];
let tempCopy = [];

const initialState = {
	components: [],
	uniqueIdCounter: 0,
	currentPage: 1,
	copy: []
};

// TODO: make ONLY one header and footer addable. Doesn't make sense to have multiple as they are unique!

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.HEADER:
			stateArray = [...state.components];
			component = "Header";
			// Step 1 in updating the list of components with a new component
			stateArray.push({ type: component, id: state.uniqueIdCounter });
			idIteration = state.uniqueIdCounter + 1;
			return {
				// Step 2 in updating the list of components with a new component
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
				// TODO: Update each of these Return statements to include "currentPage" and "copy"
			};
		case actionTypes.HEADLINE:
			stateArray = [...state.components];
			component = "Headline";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: state.copy
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
			};
		case actionTypes.TEXT_AREA:
			stateArray = [...state.components];
			component = "Text Area";
			stateArray.push({ type: component, id: state.uniqueIdCounter });
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
			};
		case actionTypes.IMAGE:
			stateArray = [...state.components];
			component = "Image";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
			};

		case actionTypes.EMAIL_FIELD:
			stateArray = [...state.components];
			component = "Email Field";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: state.copy
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
			};
		case actionTypes.FOOTER:
			stateArray = [...state.components];
			component = "Footer";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: state.copy
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration,
				currentPage: state.currentPage,
				copy: state.copy
			};
		// // The simple Old Version
		// let footerArray = [...state.components, "Footer"];
		// return {
		// 	components: footerArray
		// };
		case actionTypes.SET_NEW:
			// uploads the newly reordered set of components to state
			let uploadNewOrder = [...action.payload];
			return {
				components: uploadNewOrder,
				uniqueIdCounter: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: state.copy
			};
		case actionTypes.DEL:
			// uploads the state less the deleted item
			let uploadShortened = [...action.payload];
			return {
				components: uploadShortened,
				uniqueIdCounter: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: state.copy
			};
		case actionTypes.PAGE_CHANGE:
			stateArray = [...state.components];
			return {
				components: stateArray,
				uniqueIdCounter: state.uniqueIdCounter,
				// action.payload is set in each page's ComponentDidMount()
				currentPage: action.payload,
				copy: state.copy
			};
		// case "SET_COPY":
		// 	console.log("Currently not in use by TextArea.js");
		// 	stateArray = [...state.components];
		// 	return {
		// 		components: stateArray,
		// 		uniqueIdCounter: state.uniqueIdCounter,
		// 		currentPage: state.currentPage,
		// 		// action.payload is set in various <Input/> fields
		// 		copy: action.payload
		// 	};
		case "NEW_VAR":
			// case "NEW_VAR" fires from Customize's renderStateComponents()
			stateArray = [...state.components];
			tempCopy = Object.assign([], state.copy); // avoids the TypeError bug with [...state.copy]
			// console.log("tempCopy: ", tempCopy);
			// push an empty copy datapoint to state with a unique id to use in identifying which copy goes where in interface
			let newInputFieldNumber = { webCopy: "", id: action.payload };
			tempCopy.push(newInputFieldNumber);
			// console.log("NEW_VAR TEMPCOPY:", tempCopy);
			return {
				components: stateArray,
				uniqueIdCounter: state.uniqueIdCounter,
				currentPage: state.currentPage,
				copy: tempCopy
			};
		default:
			return state;
	}
};

export default reducer;
