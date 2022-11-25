// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGWmvhQoBfOcTWbhye8pNgaFOPBZl9xAA",
  authDomain: "my-ecommerce-55719.firebaseapp.com",
  projectId: "my-ecommerce-55719",
  storageBucket: "my-ecommerce-55719.appspot.com",
  messagingSenderId: "475387736322",
  appId: "1:475387736322:web:ffa9a52365aeae23e3d21b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
