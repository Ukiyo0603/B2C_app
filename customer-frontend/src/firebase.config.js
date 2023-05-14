// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJJ-SXH5DOicjjMyxCA69NlfC02yRbZpM",
    authDomain: "b2c-app-e34a7.firebaseapp.com",
    projectId: "b2c-app-e34a7",
    storageBucket: "b2c-app-e34a7.appspot.com",
    messagingSenderId: "226340561759",
    appId: "1:226340561759:web:44bd3475b231138e384cea",
    measurementId: "G-ENMZ6WBVFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
