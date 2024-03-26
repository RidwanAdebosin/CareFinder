import axios from 'axios';

export const fetchHospitals = async(search) => {
  const searchParams = new URLSearchParams({
    near: search,
    categories: '15014',
    sort: 'DISTANCE'
  })

  const response = await axios.get(`https://api.foursquare.com/v3/places/search?${searchParams}`,

  {headers: {
    "Content-Type": 'application/json',
    Authorization: 'fsq32+urLJrVe9vIXAJyiXgkhxhmdEf8TsdndodPTEH8A90='
  }})
  
  console.log(response.data.results)
  return response.data.results
}




  
