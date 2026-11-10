// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD6z6HolflFzo-fXAnHI1DDaDNh0Lr7vg",
  authDomain: "merkez-nafais-el-bayan.firebaseapp.com",
  projectId: "merkez-nafais-el-bayan",
  storageBucket: "merkez-nafais-el-bayan.firebasestorage.app",
  messagingSenderId: "18732680057",
  appId: "1:18732680057:web:36ae38a61b01e4c2dda5a8",
  measurementId: "G-G0KN1VHLEQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
