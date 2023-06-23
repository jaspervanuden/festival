// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuWZPGXSTqzc3pC-uQLpvUuyE_ndjPu-A",
  authDomain: "festihub-4f00c.firebaseapp.com",
  projectId: "festihub-4f00c",  
  storageBucket: "festihub-4f00c.appspot.com",
  messagingSenderId: "726140180757",
  appId: "1:726140180757:web:79845899790f8ae1a3f11c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  

<<<<<<< HEAD
export const auth = getAuth(app);

=======
export const auth = getAuth(app);
>>>>>>> 62eb8508650a163049e9c90255166a07b4be241b
