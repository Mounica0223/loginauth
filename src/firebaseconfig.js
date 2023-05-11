// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBypxXvS6TuUyvF9CsepcRuwNAkUVbRGtY",
  authDomain: "login-auth-8aa7d.firebaseapp.com",
  projectId: "login-auth-8aa7d",
  storageBucket: "login-auth-8aa7d.appspot.com",
  messagingSenderId: "987130891933",
  appId: "1:987130891933:web:15dd7c112e78b589eb4e74"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig)
export const db=app.firestore()
export default app
