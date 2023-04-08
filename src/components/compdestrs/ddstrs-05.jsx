import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
  
  email: "",
  password: "",
  
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {  email, password } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // conform that password match
    /* if (password !== confirmPassword) {
      alert("password don't match");
      return;
    } */

    try {
      
    } catch (error) {
      
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit} className="form-input">
          
         
          
          <FormInput
            label="Email"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
            autoComplete="email"
          />
          
          <FormInput
            label="Password"
            type="text"
            required
            onChange={handleChange}
            name="password"
            value={password}
            autoComplete="password"
          />
          
         
          <Button buttonType='inverted' type="submit">Sign In</Button>
        </form>
      </div>
    
  );
};

export default SignInForm;
