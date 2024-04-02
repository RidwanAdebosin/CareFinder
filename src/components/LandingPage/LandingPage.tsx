import "./LandingPage.css";
import SocialMediaProof from "../SocialMediaProof/SocialMediaProof";
import CareFinderUserGuide from "../CareFinder/CareFinderUserGuide";
import ListingHospitalsSteps from "../ListingHospitalsSteps/ListingHospitalsStep";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Map from "../../Data/Map";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { fetchHospitals } from "../../Data/hospitals";
import { toast } from "react-toastify";
import UserLocation from "../../Data/useGeolocation"; // Import the hook
import { Button } from "../../assets/svg/Button";

export interface HospitalsFetched {
  name: string;
  address: string;
  country: string;
}

function LandingPage({ hospitalResult, setHospitalResult }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
   // Get user's current location
   const userLocation = UserLocation();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchHospitals = async () => {
    try {
      // toast error if the input field is empty
      if (!inputValue) {
        toast.error("Search field can't be empty");
      } else {
        setIsLoading(true);
        // fetch the hospitals according to the location user typed
        const hospitalsFetched: HospitalsFetched[] = await fetchHospitals(
          inputValue
        );
        setHospitalResult(hospitalsFetched);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLocation = async () => {
    try {
      setIsLoading(true);
     
      // Fetch the hospitals near the user's location
      const hospitalsFetched: HospitalsFetched[] = await fetchHospitals(
        userLocation
      );
      setHospitalResult(hospitalsFetched);
      setIsLoading(false);
      console.log(hospitalResult);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <div className="landingPage">
        <div className="map-container">
          <Map />
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
                required
                type="text"
                id="iconified"
                placeholder="&#128269; Your location..."
                className="landingpage-input"
                value={inputValue}
                onChange={handleInputChange}
              />
              <NavLink
                style={({ isActive }) =>
                  isActive ? { color: "blue" } : { color: "#fff" }
                }
                className="navigate"
                to={!isLoading && inputValue ? "/hospital-list" : "/"}
              >
                <Button onClick={handleSearchHospitals}>
                  Search
                </Button>
              </NavLink>
            </div>
            <p>- or </p>
            {/* Render text to get user's location */}
           
           <span onClick={handleUserLocation}>
              <UserLocation/>
           </span>
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
