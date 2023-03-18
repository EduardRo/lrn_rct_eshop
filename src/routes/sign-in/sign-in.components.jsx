import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {
  useEffect(() => async ()=> {
    const response = await getRedirectResult(auth);
    if (response){
      const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    
    console.log(response);
  }, []);
  //When you pass this empty array at the end it run the function once
  const logGoogleUser = async () => {
    //const response = await signInWithGooglePopup();
    //console.log(response);
    //createUserDocumentFromAuth(response.user);

    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  /* const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    //const userDocRef = await createUserDocumentFromAuth(user);
    console.log({ user });
  };
 */
  return (
    <><div>
      Sign In
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div><div>
        <SignUpForm />
      </div></>
  );
};

export default SignIn;
