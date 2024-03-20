
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import "./SignUp.css";
import { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";
import { db } from "../../Data/FirebaseConfig";
import {doc, serverTimestamp, setDoc} from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
   
  });
  const {name, email, password} = formData;
  const navigate = useNavigate();
  function onChange(e){
    setFormData((prevState) => ({
    ...prevState,
    [e.target.id]: e.target.value,
  }));
  }

  async function onSubmit(e){
    e.preventDefault();
    try{
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      updateProfile(auth.currentUser, {
        displayName: name,
      });
      const user = userCredential.user;
      const formDataCopy = {...formData};
      delete formDataCopy.password;
      formDataCopy.timestamp = serverTimestamp();
     
      await setDoc(doc(db, "users", user.uid), formDataCopy);
      navigate("/")
    } catch(error){
      toast.error("Email already exist, please log in or check the email again");
      }
    }

  return (
    
      <section className="signup-form">
        <h1>Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
  
        <form className="signup-input-container" onSubmit={onSubmit}>
        <input
            value={name}
            onChange={onChange}
            type="text"
            id="name"
            placeholder="Full Name"
            className="signup-input"
          />
          <input
            value={email}
            onChange={onChange}
            type="email"
            id="email"
            placeholder="Email address"
            className="signup-input"
          />
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={onChange}
            /> 
            {showPassword ? (
              <AiFillEyeInvisible className="ai-fill-eye" onClick={() => setShowPassword((prevState) => !prevState)}/>
            ) : (
              <AiFillEye className="ai-fill-eye" onClick={() => setShowPassword((prevState) => !prevState)}/>
            )}
          </div>
         
        <div className="account-options">
          <p className="flex-option">Already have an account?
          <Link to="/sign-in" className="link">Log In</Link>
          </p>
          <p>
          <Link to="/forgot-password" className="link">
            Forgot password?
          </Link>
          </p>
        </div>
        <div className="forgot-password-btn">
        <button className="btn" type="submit">Sign Up</button>
        <div>
          <p>Or</p>
        </div>
       <OAuth/>
        </div>
        </form>
      </section>
    
  );
}
export default SignUpForm;






