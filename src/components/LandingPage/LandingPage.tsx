import "./LandingPage.css";
import SocialMediaProof from "../SocialMediaProof/SocialMediaProof";
import CareFinderUserGuide from "../CareFinder/CareFinderUserGuide";
import ListingHospitalsSteps from "../ListingHospitalsSteps/ListingHospitalsStep";
import User from "../User/User";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Map from "../../Data/Map";
import { NavLink } from "react-router-dom";
import UserLocation from "../../Data/useGeolocation";
import { useState } from "react";
import { fetchHospitals } from "../../Data/hospitals";
import {toast} from "react-toastify"


export interface HospitalsFetched  {
name: string,
address: string,
country: string,

}

function LandingPage({hospitalResult, setHospitalResult}) {
const [inputValue, setInputValue] = useState("");
const [isLoading, setIsLoading] = useState(false);

const handleInputChange = (e) => {
  setInputValue(e.target.value)
};

const handleSearchHospitals = async () => {
  try{
    if(!inputValue){
    toast.error("Search field can't be empty")
    } else{
      setIsLoading(true)
      const hospitalsfetched: HospitalsFetched[] = await fetchHospitals(inputValue);
      setHospitalResult(hospitalsfetched);
      setIsLoading(false)
      console.log(hospitalResult)
    }
  } catch(error){
console.log(error)
  }
}


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
                to={!isLoading && inputValue ? '/hospital-list' : '/'}
              >
                <button className="btn" onClick={handleSearchHospitals}>Search</button>
              </NavLink>
            </div>
            <p>- or </p>
        
            <UserLocation/>
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
