import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin }
 from "react-icons/fa";
import hospitalImage from "../HospitalLandPage/gettyimages-173799627-612x612 1.jpg"


function SingleHospitalData({ hospitalsData }) {
  return (
    <div>
      <div className="single-hospital-wrapper">
        <div className="hospital-image-container">
          <img
            src={hospitalImage}
            alt={hospitalsData.name}
            className="hospital-image"
          />
        </div>
        <div className="single-hospital-details">
          <Link to={`/hospital-list/${hospitalsData.fsq_id}`} className="hospital-name">
            <h3 className="hospital-name">{hospitalsData.name}</h3>
          </Link>
          <span>
          <em>{hospitalsData.location.address}, </em>
          <em>{hospitalsData.location.country}</em>
          </span>
          <p className="hospital-intro">{hospitalsData.name} runs Pathology Services. Clinical pathologists in Africa are capable to connect the most appropriate diagnostic healthcare pathway. We offer wide range of clinical diagnosis from Haematology to Sonography.</p>
          <p className="hospital-proximity">
            <span>🏃🏻</span>
            {hospitalsData.distance} Km away
          </p>

          <span className="hospital-socials">
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaEnvelope />
              </a>
              <a>
                <FaLinkedin />
              </a>
          </span>


        </div>
      </div>
    </div>
  );
}

export default SingleHospitalData;

// import { Link } from "react-router-dom";
// import { FaEnvelope, FaInstagram, FaLinkedin }
//  from "react-icons/fa";
// import hospitalImage from "../HospitalLandPage/gettyimages-173799627-612x612 1.jpg"


// function SingleHospitalData({ hospitalsData }) {
//   return (
//     <div>
//       <div className="single-hospital-wrapper">
//         <div className="hospital-image-container">
//           <img
//             src={hospitalImage}
//             alt={hospitalsData.name}
//             className="hospital-image"
//           />
//         </div>
//         <div className="single-hospital-details">
//           <Link to={`/hospital-landingpage/${hospitalsData.fsq_id}`} className="hospital-name">
//             <h3 className="hospital-name">{hospitalsData.name}</h3>
//           </Link>
//           <span>
//           <em>{hospitalsData.location.address}, </em>
//           <em>{hospitalsData.location.country}</em>
        
//           </span>
//           <p className="hospital-intro">{hospitalsData.name} runs Pathology Services. Clinical pathologists in Africa are capable to connect the most appropriate diagnostic healthcare pathway. We offer wide range of clinical diagnosis from Haematology to Sonography.</p>
//           <p className="hospital-proximity">
//             <span>🏃🏻</span>
//             {hospitalsData.distance} Km
//           </p>

//           <span className="hospital-socials">
//               <a>
//                 <FaInstagram />
//               </a>
//               <a>
//                 <FaEnvelope />
//               </a>
//               <a>
//                 <FaLinkedin />
//               </a>
//           </span>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default SingleHospitalData;
