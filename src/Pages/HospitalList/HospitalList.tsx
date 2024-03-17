import React from "react";
import Map from "../../Data/Map";
import { BiDownload, BiShareAlt, BiFilter } from "react-icons/bi";
import Navigation from "../../components/Navigation/Navigation";
import SingleHospitalData from "./SingleHopspitalData.tsx";
import { Link } from "react-router-dom";
import "./HospitalList.css";
import Footer from "../../components/Footer/Footer";
import { hospitalsInfo } from "../../Data/hospitals.tsx";
import { useState } from "react";
import Pagination from "./Pagination";
import { CSVLink } from "react-csv";

const headers = [
  { label: "Hospital Name", key: "hospitalName"},
  { label: "Hospital Intro", key: "hospitalIntro"},
  { label: "Hospital Location", key: "coordinates"}
];

const csvReport = {
  data: hospitalsInfo,
  headers: headers,
  filename: "Hospitals_Search_Report.csv"
}

function HospitalList() {
  const [hospitalListPerPage] = useState(3);
  const [page, setPage] = useState(1);
  const indexOfLastHospital = page * hospitalListPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalListPerPage;
  const currentHospitals = hospitalsInfo.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const handleDownloadHospitalsData = () => {
    // Creating a CSV file containing all hospitals information
    const csvData = hospitalsInfo.map(hospital => ({
      hospitalName: hospital.hospitalName,
      hospitalIntro: hospital.hospitalIntro,
      coordinates: hospital.coordinates
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

  return (
    <>
      <Navigation />
      <div className="hospital-list-wrapper">
        <div className="hospital-list-map-container">
          <span className="hospital-list-iframe">
            <Map />
          </span>
        </div>

        <div className="hospital-list-container">
          <div className="no-of-hospitals-found">
            <p>
              <span>{hospitalsInfo.length}</span> facilities found
            </p>
            <div className="hospitals-found-logos">
              <BiFilter className="filter-hospital-result" />
              <BiShareAlt className="share-hospital-search-result" />
              <CSVLink {...csvReport}>
                <BiDownload className="download-hospital-details" onClick={handleDownloadHospitalsData}/>
              </CSVLink>
            </div>
          </div>
          <ul className="singlehospital-details">
            {currentHospitals.map((hospital) => (
              <SingleHospitalData
                hospitalsData={hospital}
                key={hospital.id}
              />
            ))}
          </ul>
          <Pagination
            disabledPrev={page === 1}
            disabledNext={indexOfLastHospital === hospitalsInfo.length-1}
            page={page}
            setPage={setPage}
            indexOfLastHospital={indexOfLastHospital}
          />
          <span className="go-back-to-homepage">
            <Link to="/" className="go-back-to-homepage">
              &larr;
            </Link>
          </span>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HospitalList;
