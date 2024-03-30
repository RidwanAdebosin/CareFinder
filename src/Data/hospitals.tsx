import axios from 'axios';
// import { onSnapshot } from 'firebase/firestore';
import { colRef } from './FirebaseConfig';
import { addDoc } from 'firebase/firestore';



export const fetchHospitals = async (search) => {
  // const latitude = result.location.main.latitude;
  // const longitude = result.location.main.longitude;
  const searchParams = new URLSearchParams({
    near: search,
    categories: '15014',
    sort: 'DISTANCE',
    // ll: `${latitude}, ${longitude}`,
  });

  try {
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        headers: {
          "Content-Type": 'application/json',
          Authorization: 'fsq32+urLJrVe9vIXAJyiXgkhxhmdEf8TsdndodPTEH8A90='
        }
      }
    );
    
    
    console.log(response.data.results);

    response.data.results.forEach(async (result) => {
      try{
        // using addDoc save the hospitals fetched from the API into your firestore
        await addDoc(colRef, {
          name: result.name, 
          distance: result.distance,
          location: result.location,
        });
      } catch(error) {
        console.error("Error adding hospital to Firestore:", error);
      }
    })
    return response.data.results;
  } catch (error) {
    console.error("Error fetching hospitals:", error);
    throw error; // Propagate the error to the caller
  }
  
};





  


  
