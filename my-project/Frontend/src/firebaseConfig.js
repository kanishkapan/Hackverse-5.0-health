// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import for real-time database
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCegUdeXrKIyUwJBV5IDx272ji_gPhQGwg",
  authDomain: "chat-8a30f.firebaseapp.com",
  projectId: "chat-8a30f",
  storageBucket: "chat-8a30f.firebasestorage.app",
  messagingSenderId: "178416982776",
  appId: "1:178416982776:web:6b165f9348bc361656f90d",
  measurementId: "G-H0TT1W270L",
  databaseURL: "https://chat-8a30f-default-rtdb.firebaseio.com", // Add your Database URL here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);

// Initialize and export the database
export const database = getDatabase(app);
