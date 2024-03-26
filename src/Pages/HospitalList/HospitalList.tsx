import React from "react";
import Map from "../../Data/Map";
import { FaDownload, FaFilter, FaPlus, FaShareAlt } from "react-icons/fa";
import Navigation from "../../components/Navigation/Navigation";
import SingleHospitalData from "./SingleHopspitalData.tsx";
import { Link } from "react-router-dom";
import "./HospitalList.css";
import Footer from "../../components/Footer/Footer";
// import { hospitalResult } from "../../Data/hospitals.tsx";
import { useState } from "react";
import Pagination from "./Pagination";
// import { CSVLink } from "react-csv";
// import { HospitalsFetched } from "../../components/LandingPage/LandingPage.tsx";



// const headers = [
//   { label: "Hospital Name", key: "hospitalName"},
//   { label: "Hospital Intro", key: "hospitalIntro"},
//   { label: "Hospital Location", key: "coordinates"}
// ];

// const csvReport = {
//   data: hospitalResult,
//   headers: headers,
//   filename: "Hospitals_Search_Report.csv"
// }

function HospitalList({hospitalResult}){
  const [hospitalListPerPage] = useState(3);
  const [page, setPage] = useState(1);
  const indexOfLastHospital = page * hospitalListPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalListPerPage;
  const currentHospitals = hospitalResult.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  // const handleDownloadHospitalsData = () => {
  //   // Creating a CSV file containing all hospitals information
  //   const csvData = hospitalResult.map(hospital => ({
  //     hospitalName: hospital.hospitalName,
  //     hospitalIntro: hospital.hospitalIntro,
  //     coordinates: hospital.coordinates
  //   }));

  //   // Generate CSV file and trigger download
  //   const csvContent = [
  //     headers.map(header => header.label).join(','),
  //     ...csvData.map(row => Object.values(row).join(','))
  //   ].join('\n');

  //   const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
  //   const link = document.createElement('a');
  //   link.setAttribute('href', encodedUri);
  //   link.setAttribute('download', csvReport.filename);
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

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
              {/* <CSVLink {...csvReport}> */}
                {/* <FaDownload className="hospital-result-logo" onClick={handleDownloadHospitalsData}/> */}
              {/* </CSVLink> */}
              <Link to="/add-hospitals" className="hospital-result-logo">
              <FaPlus />
              </Link>
            </div>
          </div>

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
          />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HospitalList;
