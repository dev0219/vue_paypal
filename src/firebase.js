import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDCjwdXOKsLLPcc-x_FwCJStVsG9VxBpzo",
	authDomain: "builder2020-frontend-vue.firebaseapp.com",
	databaseURL: "https://builder2020-frontend-vue.firebaseio.com",
	projectId: "builder2020-frontend-vue",
	storageBucket: "builder2020-frontend-vue.appspot.com",
	messagingSenderId: "292427839459",
	appId: "1:292427839459:web:8e94aab61d443b26b9d2d6",
	measurementId: "G-42QD5Z8PCC"
};

firebase.initializeApp(firebaseConfig);

const fireStore = firebase.firestore();
const firebaseAuth = firebase.auth();

export {
	fireStore,
	firebaseAuth
};