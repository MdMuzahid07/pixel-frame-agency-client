// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDk3_5iLXJ48JWWbslOAa9M8ZuALykyK5w",
    authDomain: "pixelframe-6d5bc.firebaseapp.com",
    projectId: "pixelframe-6d5bc",
    storageBucket: "pixelframe-6d5bc.appspot.com",
    messagingSenderId: "714182673933",
    appId: "1:714182673933:web:cdafb4df4ae9bf9954b744",
    measurementId: "G-5QEX54MMQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const analytics = getAnalytics(app);

export default auth;