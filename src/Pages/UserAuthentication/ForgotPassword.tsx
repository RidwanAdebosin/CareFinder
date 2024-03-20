import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import OAuth from "./OAuth";
import "./SignUp.css"

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
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="signup-input"
            />

           
              <p>
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="link"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="link"
                >
                  Sign in instead
                </Link>
              </p>
            <div className="forgot-password-btn">
            <button
              className="btn"
              type="submit"
            >
              Send reset password
            </button>
            <div>
              <p>OR</p>
            </div>
            <OAuth />
            </div>
          </form>
       
      
    </section>
  );
}