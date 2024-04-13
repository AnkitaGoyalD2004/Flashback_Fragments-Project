// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-c332e.firebaseapp.com",
  projectId: "mern-blog-c332e",
  storageBucket: "mern-blog-c332e.appspot.com",
  messagingSenderId: "896057062696",
  appId: "1:896057062696:web:e18f4de5f8dfec2f968c1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
