import firebase from 'firebase'
// import {
// 	API_KEY,
// 	AUTH_DOMAIN,
// 	DATABASE_URL,
// 	PROJECT_ID,
// 	MESSAGE_SENDER_ID,
// 	APP_ID
// } from 'react-native-dotenv'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyARrNfwyvpc_wTxTyN-cgWKutZ4mGMIgNY",
	authDomain: "tracket-48dca.firebaseapp.com",
	databaseURL: "https://tracket-48dca.firebaseio.com",
	projectId: "tracket-48dca",
	storageBucket: "tracket-48dca.appspot.com",
	messagingSenderId: "601264434435",
	appId: "1:601264434435:web:c74b3f54a97c4c74360d36"
}

let Firebase = firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

// avoid deprecated warnings
db.settings({
	timestampsInSnapshots: true
})

export default Firebase
