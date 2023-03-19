import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // conform that password match
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      //console.log({user});
    } catch (error) {
      if (error.code == "auth/emai-already-in-use") {
        alert("We have already an user with this email");
      } else {
        console.log("user creation error:", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  return (
    
      <div>
        <h1>Sign UP with your email and password</h1>
        <form onSubmit={handleSubmit} className="form-input">
          {/* <label>Display Name</label>
          <input
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            autoComplete="name"
          /> */}
          <FormInput
            label="Display Name"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            autoComplete="name"
          />
          
          <FormInput
            label="Email"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            autoComplete="name"
          />
          
          <FormInput
            label="Password"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            autoComplete="name"
          />
          
          <FormInput
            label="Confirm Password"
            type="text"
            required
            onChange={handleChange}
            name="displayName"
            value={displayName}
            autoComplete="name"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    
  );
};

export default SignUpForm;
