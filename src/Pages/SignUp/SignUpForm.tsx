import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";

import CareFinderLogo from ".//careFinderLogo.png"
import { useContext } from "react";
import { AuthContext } from "../../utils";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const { loginUser, loading, user } = useContext(AuthContext);
  const navigate = useNavigate();

  // If authentication is still loading, display a loading indicator
  if (loading) {
    return (
      <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
    );
  }

  // If the user is already authenticated, redirect to the home page
  if (user) {
    navigate("/");
  }

  // Handle form submission for user login
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));

    e.target.reset();
  };

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
            type="email"
            placeholder="&#9993;Email"
            className="signup-input"
          />

          <input
            type="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
          />
        </div>

        {/* <button className="signup-btn" disabled={loading || currentUser} onClick={handleSignup}>SignUp</button>

        <button className="signup-btn" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button> */}

        <button className="signup-btn" disabled={loading} onClick={handleFormSubmit}>Log In</button>


        <p>Or sign up with</p>
        <span className="signup-socials">
          <FaFacebook />
          <FaGoogle />
          <FaApple />
        </span>
      </div>

    </div>
  );


// function SignUpForm() {
  // const [loading, setLoading] = useState(false);
  // const currentUser = useAuth();
  // const emailRef = useRef<HTMLInputElement>(null);
  // const passwordRef = useRef<HTMLInputElement>(null);

  // async function handleSignup(e: FormEvent) {
  //   e.preventDefault();
  //   if (!emailRef.current || !passwordRef.current) {
  //     return;
  //   }
  //   try {
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);

  //   } catch {
  //     alert("Error!")
  //   }
  //   setLoading(false);
  // }

  // async function handleLogout() {
  //   setLoading(true);
  //   try {
  //     await logout();
  //   } catch {
  //     alert("Error!");
  //   }
  //   setLoading(false);
  // }

  // async function handleLogin() {
  //   setLoading(true);
  //   try {
  //     await login(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     alert("Welcome {currentUser.email}")
  //   }
  //   setLoading(false);
  // }



  // return (
  //   <div>
  //     <div className="signup-careFinder-logo">
  //       <img
  //         src={CareFinderLogo}
  //         alt="CareFinder"
  //         className="signup-carefinder-logo"
  //       />
  //     </div>
  //     {/* Currently logged in as: {currentUser?.email} */}


  //     <div className="signup-form">
  //       <h1>Create Account</h1>
  //       <p>Sign up to get search for hospitals near you super fast!</p>
  //       <div className="signup-input-container">

  //         <input
  //           type="email"
  //           placeholder="&#9993;Email"
  //           className="signup-input"
  //         />

  //         <input
  //           type="password"
  //           placeholder="&#42;&#42;&#42; password..."
  //           className="signup-input"
  //         />
  //       </div>

  //       {/* <button className="signup-btn" disabled={loading || currentUser} onClick={handleSignup}>SignUp</button>

  //       <button className="signup-btn" disabled={loading || !currentUser} onClick={handleLogout}>Log Out</button> */}

  //       <button className="signup-btn" disabled={loading}>Log In</button>


  //       <p>Or sign up with</p>
  //       <span className="signup-socials">
  //         <FaFacebook />
  //         <FaGoogle />
  //         <FaApple />
  //       </span>
  //     </div>

  //   </div>
  // );
}
export default SignUpForm;


{/* <span className="go-back-to-homepage">
  <Link to="/" className="go-back-to-homepage">
    &larr;
  </Link>
</span> */}



