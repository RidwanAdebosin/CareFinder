import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import "./UserAuth.css";
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
          required
            value={email}
            onChange={onChange}
            type="email"
            id="email"
            placeholder="Email address"
            className="signup-input"
          />
          <div className="password-input">
            <input
            required
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="signup-input"
              value={password}
              onChange={onChange}
            /> 
            <div className="eye-icon">
            {showPassword ? (
              <AiFillEyeInvisible onClick={() => setShowPassword((prevState) => !prevState)}/>
            ) : (
              <AiFillEye onClick={() => setShowPassword((prevState) => !prevState)}/>
            )}
            </div>
          </div>
         
        <div style={{marginBlockEnd: '20px'}}>
          <p>
          <Link to="/forgot-password" style={{textDecoration: 'none', display: 'flex', textAlign: 'start', color: 'grey'}}>
            Forgot password?
          </Link>
          </p>
        <div className="forgot-password-btn">
        <button type="submit" className="signup-input-btn">Sign In</button>
          <p>Or</p>
       <OAuth/>
        </div>
        </div>
        <hr/>
        </form>
        <div className="signIn-extras">
          <p>Don't have an account?
          </p>
          <Link to="/sign-up" className="alternative-signIn-option">Register</Link>
        </div>
      </section>
    </div>
  )
}

export default SignIn;
