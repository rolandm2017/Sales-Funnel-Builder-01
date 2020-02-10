// import dotenv from "dotenv";

// import app from "firebase/app";
import * as firebase from "firebase";

import * as ROUTES from "../../store/routes";

// does process.env reach out to the .env file for its variables?
// if so, how does it know where to find the .env file? I didn't tell it.

const firebaseConfig = {
	apiKey: "AIzaSyBcibZXiNhvndtAqDUhbY8vBiaiFWNkgeo",
	authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
	databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
	projectId: `${process.env.REACT_APP_PROJECT_ID}`,
	storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
	messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
	appId: "1:782495372800:web:996a66749bb42905eceae5",
	measurementId: "G-1BLFJBWYV1"
};

class Firebase {
	constructor() {
		// dotenv.config();
		console.log(`${process.env.REACT_APP_API_KEY}`);
		firebase.default.initializeApp(firebaseConfig);
		// console.log("APP:", firebase.app.auth());
		this.auth = firebase.auth();
	}

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => {
		this.auth.signOut();
	};

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = password =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;
