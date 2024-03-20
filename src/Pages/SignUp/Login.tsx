import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import { useRef, useState } from "react";
import  auth  from "../../FirebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const [loading, setLoading] = useState(false);

type Email = string;
type Password = string;

type SignUpResult = Promise<object>;

 function login(email: Email, password: Password): SignUpResult {
    return signInWithEmailAndPassword (auth, email, password);
}

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogIn(){
    setLoading(true);
    try{
      await login(emailRef.current.value, passwordRef.current.value);
    }catch {
      alert("welcome {current}");
    }
  setLoading(false);
  }

  return (
    <div>
      <div className="signup-form">
        <h1>Already have an acoount?</h1>
        <p>Log in to get search for hospitals near you super fast!</p>
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
        <button className="signup-btn" disabled={loading} onClick={handleLogIn}>Log In</button>
        </form>
        <p>Or Log in with</p>
      </div>
        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
    </div>
  );
}
export default Login;






