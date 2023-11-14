import { useEffect, useState } from 'react';
import Weather from './Weather';

function App() {

    const API_KEY = '909e5a386d9197815f1b9c68871ee502';
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
        await fetch(`https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(
          response =>
            response.json()
        ).then(data =>
          setWeather(data)
        ).catch(err => console.log(err));
      }
      getWeather();
    }, [latitude, longitude]
    );
   
    return (
      <div className='App'>
        <Weather weatherData={ weather } />
      </div>
    );
  }
export default App;
