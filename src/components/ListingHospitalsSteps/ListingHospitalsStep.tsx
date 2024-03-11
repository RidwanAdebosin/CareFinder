import Ellipse1 from "./Ellipse1.png";
import Ellipse2 from "./Ellipse2.png";
import Ellipse3 from "./Ellipse3.png";
import "./ListingHospitalSteps.css";

function ListingHospitalsSteps() {
  return (
    <article>
      <div className="main-article">
        <div className="list-hospital-info">
          <h1>Got a Hospital you want to list?</h1>
          <p>
            We could assist you in placing your hospital to get shown when
            searched for in 3 simple steps
          </p>
        </div>
        <div className="list-hospital">
          <div className="features">
            <img src={Ellipse1} alt={"stethoscope"} />
            <h3>SignUp with us</h3>
            <p>
              {" "}
              We could assist you in placing your hospital to get shown when
              searched for in 3 simple steps
            </p>
          </div>
          <div className="features">
            <img src={Ellipse2} alt={"doctor-patient interaction"} />
            <h3>Create an account</h3>
            <p>
              Find all relevant sections, to populate the fields and get your
              hospital listed on our platform
            </p>
          </div>
          <div className="features">
            <img src={Ellipse3} alt={"hospital hallway"} />
            <h3>List your hospital</h3>
            <p>
              Follow the prompts and fill all relevant sections, and get your
              hospital listed as soon as we approve
            </p>
          </div>
        </div>
        <button className="btn">Get started now &rarr;</button>
        <span className="timeout">
          <p>
            <span>&#128337;</span>
            10 minutes to complete
          </p>
        </span>
      </div>
    </article>
  );
}

export default ListingHospitalsSteps;
