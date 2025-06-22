// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYpEsyoylUxoXwXnx2W-Dhj3aG1l9i_HM",
  authDomain: "react-aa3cc.firebaseapp.com",
  projectId: "react-aa3cc",
  storageBucket: "react-aa3cc.firebasestorage.app",
  messagingSenderId: "697552409394",
  appId: "1:697552409394:web:98ff3db7ae60e6b8f1fd2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
