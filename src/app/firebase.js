// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* const firebaseConfig = {
	apiKey: "AIzaSyDYNfu52BCW4JvS5b9sL-6pm89NtXNPpoE",
	authDomain: "to-do-4aab6.firebaseapp.com",
	databaseURL: "https://to-do-4aab6-default-rtdb.firebaseio.com",
	projectId: "to-do-4aab6",
	storageBucket: "to-do-4aab6.appspot.com",
	messagingSenderId: "1054424940779",
	appId: "1:1054424940779:web:f8d4375cc0327b2d49feae",
}; */
const firebaseConfig = {
	apiKey: "AIzaSyDYNfu52BCW4JvS5b9sL-6pm89NtXNPpoE",
	authDomain: "to-do-4aab6.firebaseapp.com",
	projectId: "to-do-4aab6",
	storageBucket: "to-do-4aab6.appspot.com",
	messagingSenderId: "1054424940779",
	appId: "1:1054424940779:web:f8d4375cc0327b2d49feae",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db, firebaseConfig };
