// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWyfKS1Xn5_kC5BbES2odui0C-5VJIrEE",
  authDomain: "auth-try-app.firebaseapp.com",
  projectId: "auth-try-app",
  storageBucket: "auth-try-app.appspot.com",
  messagingSenderId: "412345726869",
  appId: "1:412345726869:web:40c8183dd4f32e5b26289c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;