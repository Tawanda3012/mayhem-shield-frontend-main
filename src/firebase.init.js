// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGTUE899wjnYNYeNfV-1MVyz4W1K4Tte4",
  authDomain: "mayhem-shield.firebaseapp.com",
  projectId: "mayhem-shield",
  storageBucket: "mayhem-shield.appspot.com",
  messagingSenderId: "864088304566",
  appId: "1:864088304566:web:8d6b0989ab347b4452af17",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export default auth;