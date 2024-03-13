import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN_01TvjH6DugRDir28o1LY3NfIvfYoJI",
  authDomain: "care-finder-d6042.firebaseapp.com",
  projectId: "care-finder-d6042",
  storageBucket: "care-finder-d6042.appspot.com",
  messagingSenderId: "243543500498",
  appId: "1:243543500498:web:c34d13eff51e0ba96caf0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default getFirestore();
export function signup(email, password){
  return createUserWithEmailAndPassword(auth, email, password);
}