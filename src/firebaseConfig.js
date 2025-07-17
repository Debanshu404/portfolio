import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHsBIbet--2tXbZUrfT052m8ZwYPUmInw",
  authDomain: "newauthfire-368ed.firebaseapp.com",
  projectId: "newauthfire-368ed",
  storageBucket: "newauthfire-368ed.firebasestorage.app",
  messagingSenderId: "1086625171679",
  appId: "1:1086625171679:web:9b5aa35ec994e78250816a",
  measurementId: "G-BYH0VJQBKN"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app;