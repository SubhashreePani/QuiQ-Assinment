// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your_API_Key",
  authDomain: "YOUR_DOMAIN",
  projectId: "Project_ID",
  storageBucket: "Your_Bucket",
  messagingSenderId: "Your_sender_id",
  appId: "Your_app_id",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
