// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU8P6jo7pitblwDotQvAktuqFn43zJhTg",
  authDomain: "private-auth-be70c.firebaseapp.com",
  projectId: "private-auth-be70c",
  storageBucket: "private-auth-be70c.appspot.com",
  messagingSenderId: "224592633251",
  appId: "1:224592633251:web:18b6d44c7513108d2e4e16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app