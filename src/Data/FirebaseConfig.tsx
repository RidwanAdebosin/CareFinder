// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot } from "firebase/firestore";

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

export const db = getFirestore();
export const colRef = collection(db, "hospitalList");
export const getAllData = getDocs;
export const singleDoc = doc;
export const getSingleDoc = getDoc;
export const trackDataInDB = onSnapshot;
export default firebaseConfig;

export const getHospitalData = () => {
  trackDataInDB(colRef, (snapshot) => {
    const hospitalList = snapshot.docs.map((each) => {
      return {
        ...each.data(),
        id: each.id,
      };
    });
    console.log(hospitalList);
  });
};