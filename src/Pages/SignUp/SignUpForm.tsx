import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import { useRef, useState } from "react";
import  auth  from "../../FirebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";


function SignUpForm() {
  const [loading, setLoading] = useState(false);

type Email = string;
type Password = string;

type SignUpResult = Promise<object>;

 function signup(email: Email, password: Password): SignUpResult {
    return createUserWithEmailAndPassword(auth, email, password);
}

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignUp(){
    setLoading(true);
    try{
      await signup(emailRef.current.value, passwordRef.current.value);
    }catch {
      alert("Email already used by a user");
    }
  setLoading(false);
  }

  return (
    <div>
      <div className="signup-form">
        <h1>Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
        <form className="signup-input-container" >
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
        <button className="signup-btn" disabled={loading} onClick={handleSignUp}>SignUp</button>
        </form>
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






