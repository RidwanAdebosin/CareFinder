// import CareFinderLogo from "../../../images/careFinderLogo.png";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
import { Link } from "react-router-dom";
import CareFinderLogo from ".//careFinderLogo.png"
// import db from "../../config";
// import { useEffect, useState } from "react";
// import { collection, onSnapshot, addDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { signup } from "../../config";
import { useRef } from "react";


function SignUpForm() {
  // const [users, setUsers] = useState([]);
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [email, setEmail] = useState("")
  const emailRef = useRef();
  const passwordRef = useRef()


  
  function handleSignup(e){
    e.preventDefault();
    await signup(emailRef.current.value, passwordRef.current.value);
  }
  
  //  useEffect(
  //   () =>
  //   onSnapshot(collection(db, "users"),(snapshot)=>{
  //     setUsers(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }),
  //  []
  //  );

//  const handleNewUser = async (e) => {
//    e.preventDefault();
//   const collectionRef = collection(db, "users");
//   const payload = {username, password, email};
  

//  const docRef = await addDoc(collectionRef, payload);
//  console.log(docRef.id)
//  }

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
          {/* <input
            type="text"
            placeholder="&#937; Your Name..."
            className="signup-input"
            id="fields"
          
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}

          <input
            type="email"
            placeholder="&#9993; 
              Email"
            className="signup-input"
            id="fields"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
            id="fields"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
{/* <Link to="/add-hospitals"> */}
        <button className="signup-btn" onSubmit={handleSignup}>SignUp</button>
{/* </Link> */}
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
