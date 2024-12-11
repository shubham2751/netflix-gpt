// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ5lVk_V8k99d3_Sh3DyGDeygFEUdes6M",
  authDomain: "netflixgpt-5df05.firebaseapp.com",
  projectId: "netflixgpt-5df05",
  storageBucket: "netflixgpt-5df05.appspot.com",
  messagingSenderId: "85912450542",
  appId: "1:85912450542:web:e799ab74e76eead8308aff",
  measurementId: "G-SSMTSYBYSP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
