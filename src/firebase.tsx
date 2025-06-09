// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa3rLWi1LLLvI2gCVtIq6LZo_chHaB3I8",
  authDomain: "portfolio-efc40.firebaseapp.com",
  projectId: "portfolio-efc40",
  storageBucket: "portfolio-efc40.firebasestorage.app",
  messagingSenderId: "686234669473",
  appId: "1:686234669473:web:e0286a2a87bc0f58633be0",
  measurementId: "G-WXRGDSKCTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };