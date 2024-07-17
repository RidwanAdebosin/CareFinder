import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { hospitalsInfo } from "../../Data/hospitals";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HospitalLandPage.css";
import DepartmentImage1 from "./Frame 1000005648.jpg"
import DepartmentImage2 from "./Frame 1000005649.jpg"
import  DepartmentImage3 from "./gettyimages-1293918380-612x612 1.jpg"

import ActiveDepartmentImage from "./gettyimages-1293918380-612x612 1.jpg"
import ActiveDepartmentImage1 from "./gettyimages-1293918380-612x612 12.jpg"
import ActiveDepartmentImage2 from "./gettyimages-1453876840-1024x1024 1.jpg"
import ActiveDepartmentImage3 from "./gettyimages-1453876840-1024x1024 1.png"
import ActiveDepartmentImage4 from "./gettyimages-157279602-612x612 1.jpg"
import ActiveDepartmentImage5 from "./gettyimages-173799627-612x612 1.jpg"


function HospitalLandingPage() {
  const { hospitalId } = useParams();
  const [hospitalDetails, setHospitalDetails] = useState<{
    hospitalName?: string;
    hospitalIntro?: string;
    hospitalImage?: string;
  }>({});

  useEffect(() => {
    const newHospitalsInfo = hospitalsInfo.find(
      (hospital) => String(hospital.id) == hospitalId
    );
    setHospitalDetails(newHospitalsInfo);
  }, [hospitalId]);

  return (
    <div>
      <Navigation />
      <div className="hospital-landing-page-container">
        <div className="hospital-landing-page-image-container">
          <img
            src={hospitalDetails?.hospitalImage}
            alt={hospitalDetails?.hospitalName}
            className="hospital-landing-page-hospital-image"
          />
        </div>
        <div className="single-hospital-landing-page-details">
          <div className="single-hospital-landing-page-info">

          <h3 className="hospital-landing-page-hospital-name">
            {hospitalDetails?.hospitalName}
          </h3>
          <p className="hospital-landing-page-hospital-intro">
            {hospitalDetails?.hospitalIntro}
          </p>
          </div>

          <div    className="single-hospital-landing-page-department-images">
          <img src={DepartmentImage1} alt={"image showing a department in the hospital"}
          className="department-image"/>
          <img src={DepartmentImage2} alt={"image showing a department in the hospital"}
          className="department-image"/>
          <img src={DepartmentImage3} alt={"image showing a department in the hospital"}
          className="department-image"/> 
          </div>

          <div className="hospitals-image"> 
            
          </div>
        </div>
          <button className="btn">Contact us</button>
<div className="hospital-department">
  <div className="hospital-active-departmments-intro">
  <h3>Some of our active departments</h3>
  <p>Check out some of our functioning departments at <span>{hospitalDetails?.hospitalName}</span></p>

  </div>

  <div className="active-department-images">
 
          <img src={ActiveDepartmentImage} alt={"image showing active department in the hospital"}
          className="active-department-image"/>
          <img src={ActiveDepartmentImage1} alt={"image showing active department in the hospital"}
          className="active-department-image"/>
          <img src={ActiveDepartmentImage2} alt={"image showing active department in the hospital"}
          className="active-department-image"/> 
          <img src={ActiveDepartmentImage3} alt={"image showing active department in the hospital"}
          className="active-department-image"/> 
          <img src={ActiveDepartmentImage4} alt={"image showing active department in the hospital"}
          className="active-department-image"/> 
          <img src={ActiveDepartmentImage5} alt={"image showing active department in the hospital"}
          className="active-department-image"/> 
<button className="btn">Get started now</button>
  </div>
</div>
</div>
      <span className="go-back-to-homepage">
        <Link to="/" className="go-back-to-homepage">
          &larr;
        </Link>
      </span>
      <Footer />
    </div>
  );
}

export default HospitalLandingPage;
