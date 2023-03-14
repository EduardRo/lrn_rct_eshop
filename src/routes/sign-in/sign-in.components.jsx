import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser= async()=>{
    const response = await signInWithGooglePopup();
    console.log(response);

  }  
  return <div>Sign In 

    <button onClick={logGoogleUser}>Sign in with Google</button>
  </div>;
};

export default SignIn;
