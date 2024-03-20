import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import "./SignUp.css";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "./OAuth";


function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const {email, password} = formData;
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if(userCredential.user){
        navigate("/")
      }
    } catch(error){
      toast.error("Bad User Credentials");
    }
  }

  return (
    <div>
      <section className="signup-form">
        <h1>Sign In</h1>
        <p>Log in to get search for hospitals near you super fast!</p>
        <form className="signup-input-container" onSubmit={onSubmit}>
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
         
        <div>
          <p>Don't have an account?
          <Link to="/sign-up">Register</Link>
          </p>
          <p>
          <Link to="/forgot-password">
            Forgot password?
          </Link>
          </p>
        </div>
        <button className="btn" type="submit">Sign In</button>
        <div>
          <p>OR</p>
        </div>
       <OAuth/>
        </form>
        
      </section>
    </div>
  )
}

export default SignIn;

<span className="signup-socials">
<FaFacebook />
<FaGoogle />
<FaApple />
</span>