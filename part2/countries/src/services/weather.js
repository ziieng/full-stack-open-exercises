import axios from 'axios'
const baseUrl = 'https://api.openweathermap.org/data/2.5'

const api_key = import.meta.env.VITE_OPEN_WEATHER_KEY
// variable api_key now has the value set in startup

const getCurrent = (lat, lon) => {
  const request = axios.get(`${baseUrl}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`)
  return request.then(response => response.data)
}

export default { getCurrent }