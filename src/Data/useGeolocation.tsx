import { useState } from "react";

function GeoLocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState("");

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { isLoading, position, error, getPosition };
}

export default function useMyLocation() {
  // const {
  //   isLoading,
  //   position: { lat, lng },
  //   error,
  //   getPosition,
  // } = GeoLocation();

  // function handleClick() {
  //   getPosition();
  // }

  return null

  // return (
  //   <div>
  //     <button onClick={handleClick} disabled={isLoading}>
  //       Get my position
  //     </button>

  //     {isLoading && <p>Loading position...</p>}
  //     {error && <p>{error}</p>}
  //     {!isLoading && !error && lat && lng && (
  //       <p>
  //         Your GPS position:{" "}
  //         <a
  //           target="_blank"
  //           rel="noreferrer"
  //           href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
  //         >
  //           {lat}, {lng}
  //         </a>
  //       </p>
  //     )}
  //   </div>
  // );
}
