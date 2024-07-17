import FrameImage from "./Frame 1000005594.png";
import "./CareFinder.css";

function CareFinderUserGuide() {
  return (
    <div className="user-guide">
      <div className="carefinder-usage-guide">
        <h1>The best method of finding quality hospitals in your region</h1>
        <p>
          Our process have been optimized so you can do this in 3 simple and
          straightforward steps
        </p>

        <div className="steps">
          <div className="step">
            <div className="circle">1</div>
            <p>Log on to our website and locate the search button</p>
          </div>
          <span className="link-line">
            <svg height="40" width="20" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "white", strokeWidth: 5 }}
              />
            </svg>
          </span>
          <div className="step">
            <div className="circle">2</div>
            <p>
              Type in your location, Zipcode or Postal code and click the Search
              button
            </p>
          </div>
          <span className="link-line">
            <svg height="40" width="20" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="200"
                style={{ stroke: "white", strokeWidth: 5 }}
              />
            </svg>
          </span>
          <div className="step">
            <div className="circle">3</div>
            <p>
              Wait for results to load and browse through. You can also click on
              location icons to select a location on the Map
            </p>
          </div>
        </div>
        <button className="btn">Try it now &rarr;</button>
      </div>
      <div className="frame">
        <img
          src={FrameImage}
          alt={"A doctor taking a baby away from her sittng mother"}
          className="doctor"
        />
      
      </div>
    </div>
  );
}

export default CareFinderUserGuide;
