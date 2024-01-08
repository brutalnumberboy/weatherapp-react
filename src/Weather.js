import "./Weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import ThermostatIcon from '@mui/icons-material/Thermostat';
import LocationCityIcon from '@mui/icons-material/LocationCity';

const AppCard = ({ weatherData }) => (
  <Card className="card">
    <CardContent>
      <div className="content">
        <div className="current-temp">
          <img src="https://openweathermap.org/img/wn/10d@2x.png" />
          <p className="temperature"><ThermostatIcon />{weatherData.main?.temp} &deg;C</p>
          <p className="city"><LocationCityIcon /> {weatherData.name}</p>
        </div>
        <div className="column">
          <p className="temperature">
            Minimal Temperature: {weatherData.main?.temp_min} &deg;C
          </p>
          <p className="temperature">
            Maximum Temperature: {weatherData.main?.temp_max} &deg;C
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AppCard;
