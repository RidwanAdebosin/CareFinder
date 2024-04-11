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

interface Hospital {
  fsq_id: string;
  name: string;
  hospitalIntro: string;
  geocodes: {
    main: string;
  };
  dynamicLinks: string;
  distance: number;
}

interface Props {
  hospitalResult: Hospital[];
}

function HospitalList({ hospitalResult }: Props): JSX.Element {
  const [hospitalListPerPage] = useState(3);
  const hospitalsFound = hospitalResult.length;
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
    { label: "Hospital Name", key: "name" },
    { label: "Hospital Intro", key: "hospitalIntro" },
    { label: "Hospital Address", key: "results.address" },
  ];

  const csvReport = {
    data: hospitalResult,
    headers: headers,
    filename: "Hospitals_Search_Report.csv",
  };

  // function to download hospitals
  const handleDownloadHospitalsData = () => {
    // Creating a CSV file containing all hospitals information
    const csvData = hospitalResult.map((hospital) => ({
      hospitalName: hospital.name,
      hospitalIntro: hospital.hospitalIntro,
      coordinates: hospital.geocodes.main,
    }));

    // Generate CSV file and trigger download
    const csvContent = [
      headers.map((header) => header.label).join(","),
      ...csvData.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", csvReport.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // setting a timeout for the spinner
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  // function to filter hospital using distance
  const handleFilterHospitals = (): void => {
    hospitalResult.sort((a: Hospital, b: Hospital) => {
      return a.distance - b.distance;
    });
  };

  // const shareHospitalsResult = () => {
  //   // Generating the dynamic link
  //   dynamicLinks().buildShortLink().then((shortLink) => {
  //     // Creating a short link then sharing it
  //     const shareText = "Check out my results: " + shortLink;
  //     // Using Web Share API for sharing
  //     if (navigator.share) {
  //       navigator.share({
  //         title: "Share Results",
  //         text: shareText,
  //         url: shortLink
  //       }).then(() => {
  //         console.log("Shared Successfully");
  //       }).catch((error) => {
  //         console.error("Error sharing:", error);
  //       });
  //     } else {
  //       // Fallback for platforms not supporting Web Share API
  //       // Example: Copying the link to clipboard
  //       const tempInput = document.createElement('input');
  //       tempInput.value = shareText;
  //       document.body.appendChild(tempInput);
  //       tempInput.select();
  //       document.execCommand('copy');
  //       document.body.removeChild(tempInput);
  //       alert('Link copied to clipboard: ' + shareText);
  //     }
  //   }).catch((error) => {
  //     // Error handling
  //     console.error('Error creating dynamic link:', error);
  //   });
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
            <span>{hospitalsFound}</span> facilities found
          </p>
          <div className="hospitals-found-logos">
            <FaFilter
              className="hospital-result-logo"
              onClick={handleFilterHospitals}
              title="Filter hospitals in ascending alphabetical order"
            />
            <FaShareAlt
              className="hospital-result-logo"
              title="Share hospitals"
            />
            <CSVLink {...csvReport}>
              <FaDownload
                className="hospital-result-logo"
                onClick={handleDownloadHospitalsData}
                title="Download hospitals in CSV file"
              />
            </CSVLink>
            <Link
              to="/add-hospitals"
              className="hospital-result-logo"
              title="Add your hospital"
            >
              <FaPlus />
            </Link>
          </div>
        </div>
        {/* consitionally render the spinner while loading */}
        {loading ? (
          <Spinner />
        ) : (
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
              disabledNext={indexOfLastHospital === hospitalResult.length - 1}
              page={page}
              setPage={setPage}
              indexOfLastHospital={indexOfLastHospital}
              hospitalResult={hospitalResult}
            />
            <Footer />
          </div>
        )}
        ;
      </div>
    </>
  );
}

export default HospitalList;
