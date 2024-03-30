import React from "react";
import Map from "../../Data/Map";
import { FaDownload, FaFilter, FaPlus, FaShareAlt } from "react-icons/fa";
import Navigation from "../../components/Navigation/Navigation";
import SingleHospitalData from "./SingleHopspitalData.tsx";
import { Link } from "react-router-dom";
import "./HospitalList.css";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import Pagination from "./Pagination";
import Spinner from "../Spinner.tsx";
import { CSVLink } from "react-csv";
// import { HospitalsFetched } from "../../components/LandingPage/LandingPage.tsx";





function HospitalList({hospitalResult}){
  const [hospitalListPerPage] = useState(3);
  const [page, setPage] = useState(1);
  const indexOfLastHospital = page * hospitalListPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalListPerPage;
  const currentHospitals = hospitalResult.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );
  //Loading state to manage the spinner visibility
  const [loading, setLoading] = useState(true);

  const headers = [
    { label: "Hospital Name", key: "name"},
    { label: "Hospital Intro", key: "hospitalIntro"},
    { label: "Hospital Location", key: "geocodes.main"}
  ];
  
  const csvReport = {
    data: hospitalResult,
    headers: headers,
    filename: "Hospitals_Search_Report.csv"
  }

  const handleDownloadHospitalsData = () => {
    // Creating a CSV file containing all hospitals information
    const csvData = hospitalResult.map(hospital => ({
      hospitalName: hospital.name,
      hospitalIntro: hospital.hospitalIntro,
      coordinates: hospital.geocodes.main
    }));

    // Generate CSV file and trigger download
    const csvContent = [
      headers.map(header => header.label).join(','),
      ...csvData.map(row => Object.values(row).join(','))
    ].join('\n');

    const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', csvReport.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const shareHospitalsResult = () => {
    // Generating the dynamic link
    const dynamicLink = firebase.dynamicLinks().buildShortLink({
      link: 'https://care-finder-nu.vercel.app/hospital-list',
      android: {
        packageName: "care-finder-hospitalresult.android"
      },
      ios : {
        bundleId: "care-finder-hospitalresult.android.ios"
      }
    }).then((shortLink) => {
      // creating a shortlink then sharing it
      const shareText = "Check out my results:" + shortLink;
      // Using we share API for sharing
      if (navigator.share){
        navigator.share({
          title: "Share Results",
          text: shareText,
          url: shortLink
        })
      }
    })
  }

  return (
    <>
      <Navigation />
      <div className="hospital-list-wrapper">
        <div className="hospital-list-map-container">
          <span className="hospital-list-iframe">
            <Map />
          </span>
        </div>
       
          <div className="no-of-hospitals-found">
            <p>
              <span>{hospitalResult.length}</span> facilities found
            </p>
            <div className="hospitals-found-logos">
              <FaFilter className="hospital-result-logo" />
              <FaShareAlt className="hospital-result-logo" />
              <CSVLink {...csvReport}> 
                <FaDownload className="hospital-result-logo" onClick={handleDownloadHospitalsData}/> 
              </CSVLink>
              <Link to="/add-hospitals" className="hospital-result-logo">
              <FaPlus />
              </Link>
            </div>
          </div>
{/* consitionally render the spinner while loading */}
{loading ? (
  <Spinner/>
): (


        <div className="hospital-list-container">
          <ul className="singlehospital-details">
            {currentHospitals.map((hospital) => (
              <SingleHospitalData
                hospitalsData={hospital}
                key={hospital.fsq_id}
              />
            ))}
          </ul>
          <Pagination
            disabledPrev={page === 1}
            disabledNext={indexOfLastHospital === hospitalResult.length-1}
            page={page}
            setPage={setPage}
            indexOfLastHospital={indexOfLastHospital}
            hospitalResult={hospitalResult}
          />
          <Footer />
        </div>
        )}
      </div>
    </>
  );
}

export default HospitalList;
