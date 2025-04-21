// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOzsmiwZxQBzNt48d0S9v_bVyCXgteH9w",
  authDomain: "netflix-gpt-44b45.firebaseapp.com",
  projectId: "netflix-gpt-44b45",
  storageBucket: "netflix-gpt-44b45.firebasestorage.app",
  messagingSenderId: "15931327857",
  appId: "1:15931327857:web:ab50dddbd555da5d3ce2d0",
  measurementId: "G-2LP8F07TH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();