// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKBUCd5_SnjNJ4n43bUprbMmZc6VgBCh0",
  authDomain: "speecheck-the-speech-helper.firebaseapp.com",
  projectId: "speecheck-the-speech-helper",
  storageBucket: "speecheck-the-speech-helper.appspot.com",
  messagingSenderId: "774998096040",
  appId: "1:774998096040:web:d40fd200b9cfbeb6d9aa9d",
  measurementId: "G-Z0P72T2XQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);