// import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js";
// import createUserDocumentFromAuth from "../../utils/firebase/firebase.utils.js";

import {signInWithGooglePopup, createUserDocumentFromAuth,} from "../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    //const response = await signInWithGooglePopup();
    //console.log(response);
    //createUserDocumentFromAuth(response.user);
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    console.log(user);
  };
  return (
    <div>
      Sign In
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
