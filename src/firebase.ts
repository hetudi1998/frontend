// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

// Initialize Analytics (only in browser environment)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Firestore
export const db = getFirestore(app);

export { app, analytics };

