// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";

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
export const auth = getAuth();

export async function signup(email: string, password: string){
 await createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email: string, password: string){
  await signInWithEmailAndPassword(auth, email, password);
  }

export function logout(){
return signOut(auth)
}
//custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub =onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;

}

