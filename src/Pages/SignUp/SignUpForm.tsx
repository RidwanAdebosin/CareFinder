import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
// import { redirect } from "react-router-dom";
import CareFinderLogo from ".//careFinderLogo.png"
import { signup, useAuth, logout, login, } from "../../config";
import { FormEvent, useRef, useState } from "react";
import AddHospitals from "../AddHospitals/AddHospitals";
// import AddHospitals from "../AddHospitals/AddHospitals";



function SignUpForm() {
const [loading, setLoading] =useState(false);
const currentUser = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function handleSignup(e: FormEvent){
    e.preventDefault();
  if(!emailRef.current || !passwordRef.current){
    return;
  } 
  try{
    setLoading(true);
     await signup(emailRef.current.value, passwordRef.current.value);
    
  } catch {
    alert("Error!")
  }
setLoading(false);
  }

//   async function handlelogout(){
//     setLoading(true);
//   try {
//   await logout();
//   }catch{
//     alert("Error!");
//   }
//   setLoading(false);
// }

// async function handlelogin(){
//   setLoading(true);
//   try {
//     await login(emailRef.current.value, passwordRef.current.value);
//   } catch {
//     alert("Welcome {currentUser.email}")
//   }
//   setLoading(false);
// }
  
 

  return (
    <div>
      <div className="signup-careFinder-logo">
        <img
          src={CareFinderLogo}
          alt="CareFinder"
          className="signup-carefinder-logo"
        />
      </div>
 Currently logged in as: {currentUser?.email}
 {/* <AddHospitals/> */}
      {/* {!currentUser &&  */}
      <>
      <div className="signup-form">
        <h1>Create Account</h1>
        <p>Sign up to get search for hospitals near you super fast!</p>
        <div className="signup-input-container">

          <input
            ref={emailRef}
            type="email"
            placeholder="&#9993; 
              Email"
              className="signup-input"
              />

          <input
            ref={passwordRef}
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
            />
        </div>
        
        <button className="signup-btn" disabled={loading || currentUser} onClick={handleSignup}>SignUp</button>
        
        {/* <button className="signup-btn" disabled={loading || currentUser}  onClick={handlelogin}>Log In</button> */}

        {/* <button className="signup-btn" disabled={loading || !currentUser} onClick={handlelogout}>Log Out</button> */}
      
        <p>Or sign up with</p>
        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
      </div>
      </>
      {/* } */}

  
{/* 
      { !currentUser && 
      <>
      <button className="signup-btn" disabled={loading || !currentUser} onClick={handlelogout}>Log Out</button>
      </>} */}
      
    </div>
  );
}
export default SignUpForm;


{/* <span className="go-back-to-homepage">
  <Link to="/" className="go-back-to-homepage">
    &larr;
  </Link>
</span> */}




// import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
// import "./SignUp.css";
// // import { redirect } from "react-router-dom";
// import CareFinderLogo from ".//careFinderLogo.png"
// import { signup, useAuth, logout, login, signIn, auth } from "../../config";
// import { FormEvent, useRef, useState } from "react";
// // import AddHospitals from "../AddHospitals/AddHospitals";



// function SignUpForm() {
// const [loading, setLoading] =useState(false);
// const currentUser = useAuth();

//   const emailRef = useRef<HTMLInputElement>(null);
//   const passwordRef = useRef<HTMLInputElement>(null);

//   async function handleSignup(e: FormEvent){

//     e.preventDefault();
//   // if(!emailRef.current || !passwordRef.current){
//   //   return;
//   // } 
//   // try{
//   //   setLoading(true);
//   //    signup(emailRef.current.value, passwordRef.current.value);
    
//   // } catch {
//   //   alert("Error!")
//   // }
// setLoading(false);
//   }

//   async function handlelogout(){
//     setLoading(true);
//   try {
//   await logout();
//   }catch{
//     alert("Error!");
//   }
//   setLoading(false);
// }

// async function handlelogin(){
//   setLoading(true);
//   try {
  
//     const User = await signIn(auth, emailRef.current.value, passwordRef.current.value);
//    console.log(User)
//   } catch {
//     alert("Welcome {currentUser.email}")
//   }
//   setLoading(false);
// }
  
 

//   return (
//     <div>
//       <div className="signup-careFinder-logo">
//         <img
//           src={CareFinderLogo}
//           alt="CareFinder"
//           className="signup-carefinder-logo"
//         />
//       </div>
//  {/* Currently logged in as: {currentUser?.email} */}
//       {!currentUser && 
//       <>
//       <div className="signup-form">
//         <h1>Create Account</h1>
//         <p>Sign up to get search for hospitals near you super fast!</p>
//         <div className="signup-input-container">

//           <input
//             ref={emailRef}
//             type="email"
//             placeholder="&#9993; 
//               Email"
//               className="signup-input"
//               />

//           <input
//             ref={passwordRef}
//             type="password"
//             placeholder="&#42;&#42;&#42; password..."
//             className="signup-input"
//             />
//         </div>
        
//         <button className="signup-btn" disabled={loading} onClick={handleSignup}>SignUp</button>
        
//         <button className="signup-btn" disabled={loading}  onClick={async() => {
// await handlelogin()
//         }}>Log In</button>

//         <button className="signup-btn" disabled={loading || !currentUser} onClick={handlelogout}>Log Out</button>
      
//         <p>Or sign up with</p>
//         <span className="signup-socials">
//           <FaFacebook />
//           <FaGoogle />
//           <FaApple />
//         </span>
//       </div>
//       </>
//       }

  

//       { !currentUser && 
//       <>
//       <button className="signup-btn" disabled={loading || !currentUser} onClick={handlelogout}>Log Out</button>
//       </>}
      
//     </div>
//   );
// }
// export default SignUpForm;


{/* <span className="go-back-to-homepage">
  <Link to="/" className="go-back-to-homepage">
    &larr;
  </Link>
</span> */}