import "./Map.css";


function Map() {

  return (
    <div className="mapContainer">
      <div className="map">
         <iframe
            title="map"
            className="iframe"
            id="gMap"
            width="520"
            height="480"
            src="https://maps.google.com/maps?width=650&amp;height=500&amp;hl=en&amp;q=Lagos,%20Nigeria+(CareFinder)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
           <a href="https://www.gps.ie/">hospital locator</a>
          </iframe> 
      </div>
    </div>
  );
}

export default Map;



