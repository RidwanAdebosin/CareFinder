import {initializeApp} from "firebase/app"
import {
    getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBL0J48nwu2mnL9HNlYg4k0kgwZrNgSc2k",
    authDomain: "carefinder-417004.firebaseapp.com",
    projectId: "carefinder-417004",
    storageBucket: "carefinder-417004.appspot.com",
    messagingSenderId: "953909968248",
    appId: "1:953909968248:web:7acd4bc29e10093ba95c8d"
  };

  //init firebase app
  initializeApp(firebaseConfig)

  //init services
const db = getFirestore()

  //collection sef
  const colRef = collection(db, 'names')

  //get collection data
  getDocs(colRef)
  .then((snapshot) => {
    console.log(snapshot.docs)
  })