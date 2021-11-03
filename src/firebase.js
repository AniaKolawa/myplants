import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdiUCH2kR22p4Y4rzeqEZnMua4_ufwJj4",
    authDomain: "myplants-30c7a.firebaseapp.com",
    projectId: "myplants-30c7a",
    storageBucket: "myplants-30c7a.appspot.com",
    messagingSenderId: "19765739517",
    appId: "1:19765739517:web:cb604bac60a31a15cf2394",
    measurementId: "G-41276CE2B0"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export { db };