// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjBMrQm6R0gTH018075abFCxW2ITdQVCs",
  authDomain: "my-project-app-ded59.firebaseapp.com",
  projectId: "my-project-app-ded59",
  storageBucket: "my-project-app-ded59.firebasestorage.app",
  messagingSenderId: "808511352970",
  appId: "1:808511352970:web:9d58464661e6f13ac27d73",
  measurementId: "G-LQR6XG2QDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);