import { useState } from "react";
import { useEffect } from "react";
import weatherService from '../services/weather'

const Weather = ({name, lat, lng}) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    weatherService.getCurrent(lat, lng)
      .then(response => {
        setWeather(response)
      })
  }, [name, lat, lng]);

  if (!weather) {
    return null;
  }

  return (
    <div>
      <h2>Weather in {name}</h2>
      <div>Temperature: {weather.main.temp} Celsius</div>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} className="weatherIcon" />
      <div>Wind: {weather.wind.speed} m/s</div>
    </div>
  )
}

export default Weather;