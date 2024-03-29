import axios from 'axios';
// import { onSnapshot } from 'firebase/firestore';
import { colRef } from './FirebaseConfig';
import { addDoc } from 'firebase/firestore';



export const fetchHospitals = async (search) => {
  const searchParams = new URLSearchParams({
    near: search,
    categories: '15014',
    sort: 'DISTANCE'
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
        await addDoc(colRef, {
          hospitalName: result.name, 
          hospitalAdress: result.location.address,
          // address: result.address,
          
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





  


// export const fetchHospitals = async(search) => {
//   const searchParams = new URLSearchParams({
//     near: search,
//     categories: '15014',
//     sort: 'DISTANCE'
//   })

//   try {const response = await axios.get(`https://api.foursquare.com/v3/places/search?${searchParams}`,

//   {headers: {
//     "Content-Type": 'application/json',
//     Authorization: 'fsq32+urLJrVe9vIXAJyiXgkhxhmdEf8TsdndodPTEH8A90='
//   }})
  
//   // Map the response data to tally with what's in my firestore database
//   const hospitals = response.data.results.map(result => ({
//     name: result.name,
//     address: result.address,
//   }));

//   console.log(hospitals)
//   return hospitals
// } catch (error) {
//   console.error("Error fetching hospitals:", error);
//   throw error;
// }
// };



  
