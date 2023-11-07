// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e0f27.firebaseapp.com",
  projectId: "mern-estate-e0f27",
  storageBucket: "mern-estate-e0f27.appspot.com",
  messagingSenderId: "75047730450",
  appId: "1:75047730450:web:bfd3740ff976d632ea47cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);