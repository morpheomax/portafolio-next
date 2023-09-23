// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6USFmajdLZRsKcQ2Q99QuOHR98AHX7N0",
    authDomain: "profile-17175.firebaseapp.com",
    projectId: "profile-17175",
    storageBucket: "profile-17175.appspot.com",
    messagingSenderId: "696413187069",
    appId: "1:696413187069:web:581ece4b6d499019f14794",
    measurementId: "G-251ENESWQF"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

// Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
