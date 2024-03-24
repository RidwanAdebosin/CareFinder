import careFinderLogo from "./careFinderLogo.png";
import { NavLink, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom"
import { getAuth} from "firebase/auth"
import { useState } from "react";
import dropDownBtn from "./CaretDown.png";
import "./Navigation.css";
import {useAuthStatus} from "../../Pages/UserAuthentication/useAuthStatus";
import { toast } from "react-toastify";

function Navigation() {
  const {loggedIn, checkingStatus} = useAuthStatus();
  const [hamburgerIsOpen, sethamburgerIsOpen] = useState(false);
  
  //creating a function for toggling the nav on a smaller screen
  const handleHamburgerToggle = () => {
    sethamburgerIsOpen(!hamburgerIsOpen);
  };

  // creteing a function to allow a user to log out
  const auth = getAuth()
  const navigate = useNavigate();

  function onLogOut(){
    auth.signOut()
    .then(() => {
      toast.success("User logged out successfully");
      // reload the page when logged out
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error Signing Out:", error);
    })
    navigate("/");
}

  return (
    <div className="navBar">
      <div className="navbar-carefinder-logo">
      <Link to="/">
        <img src={careFinderLogo} alt="CareFinder Logo" className="carefinder-logo"/>
      </Link>
      </div>
      <div className={`nav-list-wrapper ${hamburgerIsOpen ? "nav-listA" : ""}`}>
        <ul className="nav-list">
        <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "#fff" }
              }
              className="navigate"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "#fff" }
              }
              className="navigate"
              to="/resources"
            >
              Resources
              <img
                src={dropDownBtn}
                alt="dropDownBtn"
                className="dropdown-btn"
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "#fff" }
              }
              className="navigate"
              to="/footer"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "black" } : { color: "#fff" }
              }
              className="navigate"
              to="/footer"
            >
              Contact us
            </NavLink>
          </li>
          {/* to know if user is not checking in or logged in */}
          {!checkingStatus && !loggedIn &&(
          <>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "#fff" }
            }
            className="navigate"
            to="/sign-in"
          >
          <button className="btn">Login</button>
          </NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "black" } : { color: "#fff" }
            }
            className="navigate"
            to="/sign-up"
          >
            <button className="btn">SignUp</button>
          </NavLink>
          </>
          )}
          {/* Rendering the logout button if a user is logged in */}
          {loggedIn && ( 
            <NavLink className="navigate" to="./" onClick={onLogOut}>
              <button className="btn" 
              // onClick={onLogOut}
              >Log Out</button>
            </NavLink>
          )
          }
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={handleHamburgerToggle}
        aria-label="Toggle Menu"
      >
        <Hamburger />
      </div>
    </div>
  );
}

export default Navigation;

