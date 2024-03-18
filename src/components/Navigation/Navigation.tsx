import React, { useContext, useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { AuthContext } from "../../AuthProvider";
import careFinderLogo from "./careFinderLogo.png"
// import dropDownBtn from "./"

interface User {
  displayName: string;
}

function Navigation() {
  // Access the user, logOut, and loading state from the AuthContext
  const { user, logOut, loading } = useContext(AuthContext);

  // Use the useNavigate hook to programmatically navigate between pages
  const navigate = useNavigate();

  // Handle user logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => console.error(error));
  };

  // Define navigation links based on user authentication status
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {!user && (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/sign-up">Sign-Up</NavLink>
          </li>
        </>
      )}
    </>
  );

  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
  //creating a function for toggling the nav on a smaller screen
  const handleHamburgerToggle = () => {
    setHamburgerIsOpen(!hamburgerIsOpen);
  };

  return loading ? (
    <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
  ) : (
    <div className="navBar">
      {/* Render the navigation bar */}
      <div className="navbar-carefinder-logo">
        <img src={careFinderLogo} alt="CareFinder Logo" />
      </div>
      {/* Dropdown menu for mobile devices */}
      <div className={`nav-list-wrapper ${hamburgerIsOpen ? "nav-listA" : ""}`}>
        {/* Dropdown content with navigation links */}
        <ul className="nav-list">
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "#fff" }
              }
              className="navigate"
              to="/resources"
            >
              Resources
              {/* <img
                src={dropDownBtn}
                alt="dropDownBtn"
                className="dropdown-btn"
              /> */}
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "#fff" }
              }
              className="navigate"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive ? { color: "blue" } : { color: "#fff" }
              }
              className="navigate"
              to="/contact"
            >
              Contact us
            </NavLink>
          </li>
          <li>{navLinks}</li>
        </ul>
      </div>
      <div
        className="hamburger"
        onClick={handleHamburgerToggle}
        aria-label="Toggle Menu"
      >
        <Hamburger />
      </div>
      <div className="navbar-end">
        {/* Display user information and logout button if authenticated */}
        {user && (
          <a className="btn">
            {(user as User).displayName}
          </a>
        )}
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {/* User profile picture */}
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            {/* Dropdown content for user profile */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">
                  {/* Profile link */}
                  <span className="justify-between">Profile</span>
                </Link>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
                {/* Logout button */}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;
