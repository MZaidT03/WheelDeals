// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "wheeldeals-eb803.firebaseapp.com",
  projectId: "wheeldeals-eb803",
  storageBucket: "wheeldeals-eb803.firebasestorage.app",
  messagingSenderId: "957398802775",
  appId: "1:957398802775:web:0e127b3c4342c32b9f5e12",
  measurementId: "G-YP0RELDRLM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
