// import CareFinderLogo from "../../../images/careFinderLogo.png";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";
import CareFinderLogo from ".//careFinderLogo.png"

function SignUpForm() {
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
        <div className="signup-input-container">
          <input
            type="text"
            placeholder="&#937; Your Name..."
            className="signup-input"
          />

          <input
            type="email"
            placeholder="&#9993; 
              Email"
            className="signup-input"
          />

          <input
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
          />
        </div>
<Link to="/add-hospitals">
        <button className="signup-btn">SignUp</button>
</Link>
        <p>Or sign up with</p>
        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
      </div>
      <span className="go-back-to-homepage">
        <Link to="/" className="go-back-to-homepage">
          &larr;
        </Link>
      </span>
    </div>
  );
}
export default SignUpForm;
