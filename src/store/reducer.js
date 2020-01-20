import * as actionTypes from "./constants";

const initialState = {
	components: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.HEADER:
			let headerArray = [...state.components, "Header"];
			return {
				components: headerArray
			};
		case actionTypes.HEADLINE:
			let headlineArray = [...state.components, "Headline"];
			return {
				components: headlineArray
			};

		case actionTypes.TEXT_AREA:
			let textAreaArray = [...state.components, "Text Area"];
			return {
				components: textAreaArray
			};
		case actionTypes.IMAGE:
			let imageArray = [...state.components, "Image"];
			return {
				components: imageArray
			};
		case actionTypes.EMAIL_FIELD:
			let emailFieldArray = [...state.components, "Email Field"];
			return {
				components: emailFieldArray
			};
		case actionTypes.FOOTER:
			let footerArray = [...state.components, "Footer"];
			return {
				components: footerArray
			};
		default:
			console.log("ERROR!");
			return state;
	}
};

export default reducer;
