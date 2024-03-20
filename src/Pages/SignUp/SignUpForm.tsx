import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import CareFinderLogo from ".//careFinderLogo.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignUpForm() {
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
    }))
  }

  return (
    <div>
      <div className="signup-careFinder-logo">
        <img
          src={CareFinderLogo}
          alt="CareFinder"
          className="signup-carefinder-logo"
        />
      </div>

      <div className="signup-form">
        <h1>Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
        <form className="signup-input-container" >

          <input
            value={email}
            type="email"
            placeholder="&#9993;Email"
            className="signup-input"
          />

          <input
            value={password}
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
          />
        </form>

        <button className="signup-btn">SignUp</button>

        <button className="signup-btn">Log Out</button>

        <button className="signup-btn">Log In</button>


        <p>Or sign up with</p>
        
      </div>

        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
    </div>
  );
}
export default SignUpForm;


{/* <span className="go-back-to-homepage">
  <Link to="/" className="go-back-to-homepage">
    &larr;
  </Link>
</span> */}



