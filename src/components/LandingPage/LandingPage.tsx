import React, { useState } from "react";
import "./LandingPage.css";
import SocialMediaProof from "../SocialMediaProof/SocialMediaProof";
import CareFinderUserGuide from "../CareFinder/CareFinderUserGuide";
import ListingHospitalsSteps from "../ListingHospitalsSteps/ListingHospitalsStep";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Map from "../../Data/Map";
import { NavLink } from "react-router-dom";
import { fetchHospitals } from "../../Data/hospitals";
import { toast } from "react-toastify";
import { Button } from "../../assets/Button";
import { handleLocationClick, success } from "../../Data/useGeolocation";

interface HospitalsFetched {
  name: string;
  address: string;
  country: string;
}

function LandingPage({ hospitalResult, setHospitalResult }) {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState(null);
  const [hospitals, setHospitals] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchHospitals = async () => {
    try {
      if (!inputValue) {
        toast.error("Search field can't be empty");
      } else {
        setIsLoading(true);
        const hospitalsFetched: HospitalsFetched[] = await fetchHospitals(
          inputValue
        );
        // console.log(fetchHospitals(inputValue));
        setHospitalResult(hospitalsFetched);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // function success(position) {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
  //   setLocation({ latitude, longitude });
  //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

  //   // Fetch hospitals near the user's location
  //   fetchHospitals({ latitude, longitude })
  //     .then((hospitals) => setHospitals(hospitals))
  //     .catch((error) => console.error("Error fetching hospitals:", error));
  // }

  // const handleUserLocation = async () => {
  //   try {
  //     setIsLoading(true);
  //     const hospitalsFetched: HospitalsFetched[] = await fetchHospitals(
  //       location
  //     );
  //     setHospitalResult(hospitalsFetched);
  //     setIsLoading(false);
  //     console.log(hospitalResult);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  handleLocationClick();

  return (
    <div data-testid="landingpage">
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
            <label htmlFor="locationInput">
              Enter your location, a zip code, city or state
            </label>
            <div className="inputField">
              <input
                required
                type="text"
                id="locationInput"
                placeholder="Your location..."
                className="landingpage-input"
                value={inputValue}
                onChange={handleInputChange}
              />
              <NavLink
                className="navigate"
                to={!isLoading && inputValue ? "/hospital-list" : "/"}
              >
                <Button onClick={handleSearchHospitals}>Search</Button>
              </NavLink>
            </div>
            <p>- or </p>
            <span onClick={success}>
              <a>use my location</a>
            </span>
          </form>
        </div>
      </div>
      <SocialMediaProof />
      <CareFinderUserGuide />
      <ListingHospitalsSteps />
      <User />
      <Footer />
    </div>
  );
}

export default LandingPage;
