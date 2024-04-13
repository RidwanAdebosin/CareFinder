
import { fetchHospitals } from "./hospitals";


  // const [location, setLocation] = useState(null);
  // const [hospitals, setHospitals] = useState([]);

  // useEffect(() => {
  //   if (location) {
  //     // Calculate hospital proximity when location is available
  //     updateHospitalProximity(location.latitude, location.longitude);
  //   }
  // }, [location, updateHospitalProximity]);

  export function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  export function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  return {
  latitude,
  longitude
}
console.log(success)
    // Fetch hospitals near the user's location
    // fetchHospitals({ latitude, longitude })
    //   .then((hospitals) => setHospitals(hospitals))
    //   .catch((error) => console.error("Error fetching hospitals:", error));
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  // function updateHospitalProximity(userLat, userLon) {
  //   const updatedHospitals = hospitals.map(hospital => {
  //     const distance = calculateDistance(userLat, userLon, hospital.coordinates.latitude, hospital.coordinates.longitude);
  //     return {
  //       ...hospital,
  //       hospitalProximity: `${distance.toFixed(2)} km away`
  //     };
  //   });
  //   setHospitals(updatedHospitals);
  // }

  // Function to calculate distance between two coordinates using Haversine formula
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }


