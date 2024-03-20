// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKcd4gHXfxqOxgwhVSZFiZQ4KDUEeDdJ0",
  authDomain: "form-auth-2a01d.firebaseapp.com",
  projectId: "form-auth-2a01d",
  storageBucket: "form-auth-2a01d.appspot.com",
  messagingSenderId: "861832840764",
  appId: "1:861832840764:web:4a0f6eccab4ef1d941a539"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()



