
import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCr9wLDBthGiBEoi5GrXK9DrDZMNJNE7Q",
  authDomain: "lrn-rct-eshop-db.firebaseapp.com",
  projectId: "lrn-rct-eshop-db",
  storageBucket: "lrn-rct-eshop-db.appspot.com",
  messagingSenderId: "33825726494",
  appId: "1:33825726494:web:c0094be8f58a2adf78ce0f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"

});

export const auth = getAuth();
export const signInWithGooglePopup = ()=>signInWithPopup(auth, provider);
