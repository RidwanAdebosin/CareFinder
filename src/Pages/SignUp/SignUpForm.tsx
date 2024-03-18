import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import "./SignUp.css";
// import { redirect } from "react-router-dom";
import CareFinderLogo from ".//careFinderLogo.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function SignUpForm() {
  const { createUser, user, loading } = useContext(AuthContext);
  // const [selectedImage, setSelectedImage] = useState(null);
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
  
    // Handle form submission for user registration
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        // Update user profile with display name
        updateProfile(result.user, {
          displayName: name,
        });
        navigate("/");
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    e.target.reset();
  };

  // Handle image upload (not shown in the code, but you can add it)


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
        <form onSubmit={handleFormSubmit}>
          <input
            type="email"
            name="email"
            placeholder="&#9993;Email"
            className="signup-input"
          />

          <input
            type="password"
            name="password"
            placeholder="&#42;&#42;&#42; password..."
            className="signup-input"
          />
        <button className="signup-btn" disabled={loading}>SignUp</button>
        </form>
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



