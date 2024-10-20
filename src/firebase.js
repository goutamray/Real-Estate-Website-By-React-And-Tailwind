// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-15a62.firebaseapp.com",
  projectId: "real-estate-app-15a62",
  storageBucket: "real-estate-app-15a62.appspot.com",
  messagingSenderId: "375906910782",
  appId: "1:375906910782:web:37f7fb0e514e17972cc76f"
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);



