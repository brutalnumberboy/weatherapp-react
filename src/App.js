import { useEffect, useState } from "react";
import AppCard from "./Weather.js";
import { API_KEY } from "./OpenWeatherApi";
export const WeatherIcon = {
  "01d": "https://openweathermap.org/img/wn/01d@2x.png",
  "02d": "https://openweathermap.org/img/wn/02d@2x.png",
  "03d": "https://openweathermap.org/img/wn/03d@2x.png",
  "04d": "https://openweathermap.org/img/wn/04d@2x.png",
  "05d": "https://openweathermap.org/img/wn/05d@2x.png",
  "06d": "https://openweathermap.org/img/wn/06d@2x.png",
  "07d": "https://openweathermap.org/img/wn/07d@2x.png",
  "08d": "https://openweathermap.org/img/wn/08d@2x.png",
  "09d": "https://openweathermap.org/img/wn/09d@2x.png",
  "10d": "https://openweathermap.org/img/wn/10d@2x.png",
  "11d": "https://openweathermap.org/img/wn/11d@2x.png",
  "01n": "https://openweathermap.org/img/wn/01n@2x.png",
  "02n": "https://openweathermap.org/img/wn/02n@2x.png",
  "03n": "https://openweathermap.org/img/wn/03n@2x.png",
  "04n": "https://openweathermap.org/img/wn/04n@2x.png",
  "05n": "https://openweathermap.org/img/wn/05n@2x.png",
  "06n": "https://openweathermap.org/img/wn/06n@2x.png",
  "07n": "https://openweathermap.org/img/wn/07n@2x.png",
  "08n": "https://openweathermap.org/img/wn/08n@2x.png",
  "09n": "https://openweathermap.org/img/wn/09n@2x.png",
  "10n": "https://openweathermap.org/img/wn/10n@2x.png",
  "11n": "https://openweathermap.org/img/wn/11n@2x.png"
};

function App() {
  const [latitude, setLat] = useState([]);
  const [longitude, setLong] = useState([]);

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    function success(position) {
      setLat(position.coords.latitude.toFixed(2));
      setLong(position.coords.longitude.toFixed(2));
    }

    navigator.geolocation.getCurrentPosition(success);

    const getWeather = async () => {
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
        .then((response) => response.json())
        .then((data) => setWeather(data))
        .catch((err) => console.log(err));
    };
    getWeather();
  }, [latitude, longitude]);

  return (
    <>
    <div className="App">
      <AppCard weatherData={weather} />
    </div>
    </>
  );
}
export default App;
