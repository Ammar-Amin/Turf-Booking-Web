// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "turf-time-07.firebaseapp.com",
    projectId: "turf-time-07",
    storageBucket: "turf-time-07.appspot.com",
    messagingSenderId: "167162581182",
    appId: "1:167162581182:web:453cc129698609a8d48eef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);