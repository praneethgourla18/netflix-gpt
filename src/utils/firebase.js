// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyA66Lurm2Cui0Y3MFmz8v3PIgJbAXXJFR4",
  projectId: "netflix-gpt-2035a",
  storageBucket: "netflix-gpt-2035a.appspot.com",
  messagingSenderId: "103822428376",
  appId: "1:103822428376:web:a0ca8b8d2b7b73a09aafad",
  measurementId: "G-T2EK1DECZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
