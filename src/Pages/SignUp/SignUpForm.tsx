import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
// import { redirect } from "react-router-dom";
import CareFinderLogo from ".//careFinderLogo.png"
import { signup, useAuth, logout, login, } from "../../config";
import { FormEvent, useRef, useState } from "react";


function SignUpForm() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSignup(e: FormEvent) {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) {
      return;
    }
    try {
      setLoading(true);
       await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error! Fill up the fields")
    }
    setLoading(false);
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

  async function handleLogin() {
    setLoading(true);
    try {
     await login(emailRef.current.value, passwordRef.current.value);
      
    } catch {
      alert("Welcome {currentUser.email}")
    }
    setLoading(false);
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
      {/* Currently logged in as: {currentUser?.email} */}


      <div className="signup-form">
        <h1>Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
        <div className="signup-input-container">

          <input
            ref={emailRef}
            type="email"
            placeholder="&#9993;Email"
            className="signup-input"
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
          />
        </div>


        <button className="signup-btn" disabled={loading} onClick={handleLogin}>Log In</button>

        <button className="signup-btn" disabled={loading} onClick={handleSignup}>SignUp</button>

        <button className="signup-btn" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button>


        <p>Or sign up with</p>
        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
      </div>

    </div>
  );
}
export default SignUpForm;


{/* <span className="go-back-to-homepage">
  <Link to="/" className="go-back-to-homepage">
    &larr;
  </Link>
</span> */}



