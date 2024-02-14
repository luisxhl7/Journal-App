// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ4peMQQJPsikw4XwBUDROVz-XlFf3tIA",
  authDomain: "react-cursos-5b609.firebaseapp.com",
  projectId: "react-cursos-5b609",
  storageBucket: "react-cursos-5b609.appspot.com",
  messagingSenderId: "275226434609",
  appId: "1:275226434609:web:204b511dbdadc0b8084910"
};

// Initialize Firebase
export const FirebaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB   = getFirestore(FirebaseApp);