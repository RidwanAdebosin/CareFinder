import { Link } from "react-router-dom";
import { FaEnvelope, FaInstagram, FaLinkedin }
 from "react-icons/fa";


function SingleHospitalData({ hospitalsData }) {
  return (
    <div>
      <div className="single-hospital-wrapper">
        <div className="hospital-image-container">
          <img
            src={hospitalsData.hospitalImage}
            alt={hospitalsData.hospitalName}
            className="hospital-image"
          />
        </div>
        <div className="single-hospital-details">
          <Link to={`/hospital-list/${hospitalsData.id}`}>
            <h3 className="hospital-name">{hospitalsData.hospitalName}</h3>
          </Link>
          <p className="hospital-intro">{hospitalsData.hospitalIntro}</p>
          <p className="hospital-proximity">
            <span>🏃🏻</span>
            {hospitalsData.hospitalProximity}
          </p>

          <span className="hospital-socials">
            {hospitalsData.hospitalSocials.instagram && (
              <a href={hospitalsData.hospitalSocials.instagram}>
                <FaInstagram />
              </a>
            )}
            {hospitalsData.hospitalSocials.email && (
              <a href={hospitalsData.hospitalSocials.email}>
                <FaEnvelope />
              </a>
            )}
            {hospitalsData.hospitalSocials.linkedin && (
              <a href={hospitalsData.hospitalSocials.linkedin}>
                <FaLinkedin />
              </a>
            )}
          </span>


        </div>
      </div>
    </div>
  );
}

export default SingleHospitalData;
