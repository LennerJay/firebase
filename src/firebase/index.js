// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwBndMXTXmxB9FEBCqB2ZeC5DMWbOclt8",
  authDomain: "test-project-26d7c.firebaseapp.com",
  projectId: "test-project-26d7c",
  storageBucket: "test-project-26d7c.appspot.com",
  messagingSenderId: "989893793538",
  appId: "1:989893793538:web:edde519fc04174da19941b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);