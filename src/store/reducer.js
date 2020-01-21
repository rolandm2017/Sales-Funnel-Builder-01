import * as actionTypes from "./constants";

let idIteration = null;
let component = "";
let stateArray = [];

const initialState = {
	components: [],
	uniqueIdCounter: 0
};

// TODO: make ONLY one header and footer addable. Doesn't make sense to have multiple!

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
				uniqueIdCounter: idIteration
			};
		case actionTypes.HEADLINE:
			stateArray = [...state.components];
			component = "Headline";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration
			};
		case actionTypes.TEXT_AREA:
			stateArray = [...state.components];
			component = "Text Area";
			stateArray.push({ type: component, id: state.uniqueIdCounter });
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration
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
				uniqueIdCounter: idIteration
			};

		case actionTypes.EMAIL_FIELD:
			stateArray = [...state.components];
			component = "Email Field";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration
			};
		case actionTypes.FOOTER:
			stateArray = [...state.components];
			component = "Footer";
			stateArray.push({
				type: component,
				id: state.uniqueIdCounter
			});
			idIteration = state.uniqueIdCounter + 1;
			return {
				components: stateArray,
				uniqueIdCounter: idIteration
			};
		// // The simple Old Version
		// let footerArray = [...state.components, "Footer"];
		// return {
		// 	components: footerArray
		// };
		case "SET_NEW":
			// uploads the newly reordered set of components to state
			let uploadNewOrder = [...action.payload];
			return {
				components: uploadNewOrder,
				uniqueIdCounter: state.uniqueIdCounter
			};
		case "DEL":
			// uploads the state less the deleted item
			let uploadShortened = [...action.payload];
			return {
				components: uploadShortened,
				uniqueIdCounter: state.uniqueIdCounter
			};
		default:
			console.log("Reducer switch statement returned default state");
			return state;
	}
};

export default reducer;
