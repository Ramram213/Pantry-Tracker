// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAc69ln_oIq2qGLQxGxk4UUuW2y_mcU9M",
  authDomain: "inventory-management-61c59.firebaseapp.com",
  projectId: "inventory-management-61c59",
  storageBucket: "inventory-management-61c59.appspot.com",
  messagingSenderId: "141286258082",
  appId: "1:141286258082:web:43fa68b695d842b168aefb",
  measurementId: "G-3G5KXHCX6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};