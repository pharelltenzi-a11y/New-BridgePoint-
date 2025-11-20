// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBtgnXz4ndTA2GMXBTN1ZwPgPrZQ7LSVs",
  authDomain: "bridgepoint-5deaa.firebaseapp.com",
  projectId: "bridgepoint-5deaa",
  storageBucket: "bridgepoint-5deaa.firebasestorage.app",
  messagingSenderId: "954237244994",
  appId: "1:954237244994:web:95ad5a87dbde2bb4deffdb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);