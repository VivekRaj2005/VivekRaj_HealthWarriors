// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04FVQD7iB_RzohTNpaslojLcVSd4gfD4",
  authDomain: "odoo-hackathon-30ef1.firebaseapp.com",
  projectId: "odoo-hackathon-30ef1",
  storageBucket: "odoo-hackathon-30ef1.firebasestorage.app",
  messagingSenderId: "38426591989",
  appId: "1:38426591989:web:3f9cbe9ff7703521413bbc",
  measurementId: "G-LMLXN396J0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

export default { app, store };
