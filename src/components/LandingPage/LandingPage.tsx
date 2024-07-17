import "./LandingPage.css";
import SocialMediaProof from "../SocialMediaProof/SocialMediaProof";
import CareFinderUserGuide from "../CareFinder/CareFinderUserGuide";
import ListingHospitalsSteps from "../ListingHospitalsSteps/ListingHospitalsStep";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Map from "../../Data/Map";
import { NavLink } from "react-router-dom";
// import UserLocation from "../../Data/useGeolocation";

function LandingPage() {
  return (
    <>
      <Navigation />
      <div className="landingPage">
        <div className="map-container">
          <Map/>
        </div>
        <div className="searchingPage">
          <h1>Find Hospital close to your Residence</h1>
          <p>
            Are you in need of getting to know the hospital closer to you? Work
            on the form below.
          </p>
          <form>
            <label>Enter your location, a zip code, city or state</label>
            <div className="inputField">
              <input
                type="text"
                id="iconified"
                placeholder="&#128269; Your location..."
                className="landingpage-input"
              />
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "blue" } : { color: "#fff" }
                }
                className="navigate"
                to="/hospital-list"
              >
                <button className="btn">Search</button>
              </NavLink>
            </div>
            <p>- or </p>
        
            {/* <UserLocation/> */}
          </form>
        </div>
      </div>
      <SocialMediaProof />
      <CareFinderUserGuide />
      <ListingHospitalsSteps />
      <User />
      <Footer />
    </>
  );
}

export default LandingPage;
