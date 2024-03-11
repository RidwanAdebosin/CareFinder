import careFinderLogo from "./careFinderLogo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="carefinder-logo">
        <img src={careFinderLogo} alt="CareFinder Logo" />
      </div>
      <div className="footer-extras">
        <div className="footer-extra">
          <ul>
            <li>Product</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Support</li>
            <li>Getting started</li>
            <li>Help Centre</li>
            <li>Server status</li>
          </ul>
        </div>
        <div className="footer-extra">
          <ul>
            <li>Follow us</li>
            <li className="socials">
              <span>
                <FaFacebook className="social-logo" />
              </span>
              Facebook
            </li>
            <li className="socials">
              <span>
                <FaInstagram className="social-logo" />
              </span>
              Instagram
            </li>
            <li className="socials">
              <span>
                <FaLinkedin className="social-logo" />
              </span>
              LinkedIn
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
