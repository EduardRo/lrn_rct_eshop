
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';


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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// used to acces to database in Firebase
export const db = getFirestore();

// create some methods

/* const createUserDocumentFromAuth = async (userAuth) => {
  // we need to know if it exist a doc reference
  const  userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);
}; */

export const createUserDocumentFromAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users', userAuth.uid);
  
  console.log(userDocRef);
  
  const userSnapshot = await getDoc(userDocRef);
  //if user data exists
  if (userSnapshot.exists()){
    console.log('user exists!');
  }
  //if user data not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  console.log(userDocRef);
  return userDocRef;
};
