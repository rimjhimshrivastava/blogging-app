// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhclK0NMoAOD1iUPZHkxNdBY79nI4pXVc",
  authDomain: "blogging-app-a8372.firebaseapp.com",
  projectId: "blogging-app-a8372",
  storageBucket: "blogging-app-a8372.appspot.com",
  messagingSenderId: "348209286118",
  appId: "1:348209286118:web:6182f15f51bcfb809ba427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;