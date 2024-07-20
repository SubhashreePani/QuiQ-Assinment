// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClSaECCTKdH4D8BzVmzGIt-2I7-vv42Us",
  authDomain: "first-trial-4c77b.firebaseapp.com",
  projectId: "first-trial-4c77b",
  storageBucket: "first-trial-4c77b.appspot.com",
  messagingSenderId: "464124915026",
  appId: "1:464124915026:web:3c0683b2fe7c9777b09e8b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
