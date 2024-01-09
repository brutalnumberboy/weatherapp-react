import "./Weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
import { WeatherIcon } from "./App";

export const unixToDate = (unixTime) => {
  return `${new Date(unixTime * 1000).getHours()} : ${new Date(unixTime * 1000).getMinutes()}`
}

const AppCard = ({ weatherData }) => (
  <Card className="card">
    <CardContent>
      <div className="content">
        <div className="current-temp">
          <img src={WeatherIcon[weatherData.weather?.[0].icon]} />
          <p className="city"><LocationCityIcon /> {weatherData.name}</p>
          <p className="temperature"><ThermostatIcon />{weatherData.main?.temp} &deg;C</p>
        </div>
        <div className="column">
          <p className="sunrise">
            <WbSunnyIcon /> <span style={{fontWeight:"bold"}}>Sunrise</span>: {unixToDate(weatherData.sys?.sunrise)} AM
          </p>
          <p className="sunset">
            <NightlightIcon /><span style={{fontWeight:"bold"}}>Sunset</span>: {unixToDate(weatherData.sys?.sunrise)} PM
          </p>
        </div>
        <div className="column">
          <p className="wind">
            <AirIcon /> <span style={{fontWeight:"bold"}}>Wind</span>: {weatherData.wind?.speed} 
          </p>
          <p className="humidity">
          <WaterDropIcon /><span style={{fontWeight:"bold"}}>Humidity</span>: {weatherData.main?.humidity}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AppCard;
