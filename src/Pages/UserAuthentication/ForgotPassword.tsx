import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./UserAuth.css"

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent");
    } catch (error) {
      toast.error("Could not send reset password");
    }
  }
  return (
    <section className="signup-form">
      <h1 className="forgot-password-header">Forgot Password</h1>
      
        
          <form onSubmit={onSubmit} className="signup-input-container">
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="signup-input"
            />
            <div className="forgot-password-btn">
            <button
              className="btn"
              type="submit"
            >
              Send reset password
            </button>
            </div>
            <div className="signIn-extras">
            <p> Already have an account?
            </p>
            <Link to="/sign-in" className="alternative-signIn-option">Log In</Link>
            </div>
            <div className="signIn-extras">
          <p>Don't have an account?
          </p>
          <Link to="/sign-up" className="alternative-signIn-option">Register</Link>
        </div>
           
          </form>
       
      
    </section>
  );
}