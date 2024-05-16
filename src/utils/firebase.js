// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMBwd80hbnnCEv9MX7hMZBpd2T7ZWqzA",
  authDomain: "netflixgpt-11830.firebaseapp.com",
  projectId: "netflixgpt-11830",
  storageBucket: "netflixgpt-11830.appspot.com",
  messagingSenderId: "502517566477",
  appId: "1:502517566477:web:5704675271bc1f6af59944",
  measurementId: "G-TP4PPTXJ8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();