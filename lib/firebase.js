// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDADCGOf6gpn0fXOsifj6aeeQuXrCAsYt4",
  authDomain: "core-6-firebase.firebaseapp.com",
  projectId: "core-6-firebase",
  storageBucket: "core-6-firebase.appspot.com",
  messagingSenderId: "663746016419",
  appId: "1:663746016419:web:509d251d86aed10aa1fb16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);




export const auth = getAuth(app);
