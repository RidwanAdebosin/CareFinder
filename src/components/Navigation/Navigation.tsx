import careFinderLogo from "./careFinderLogo.png";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import dropDownBtn from "./CaretDown.png";
import "./Navigation.css";

function Navigation() {
  const [hamburgerIsOpen, sethamburgerIsOpen] = useState(false);
  //creating a function for toggling the nav on a smaller screen
  const handleHamburgerToggle = () => {
    sethamburgerIsOpen(!hamburgerIsOpen);
  };

  return (
    <div className="navBar">
      <div className="navbar-carefinder-logo">
        <img src={careFinderLogo} alt="CareFinder Logo" />
      </div>
      <div className={`nav-list-wrapper ${hamburgerIsOpen ? "nav-listA" : ""}`}>
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
          <button className="btn">Login</button>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "blue" } : { color: "#fff" }
            }
            className="navigate"
            to="/signupform"
          >
            <button className="btn">SignUp</button>
          </NavLink>
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
