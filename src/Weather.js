import "./Weather.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PublicIcon from "@mui/icons-material/Public";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function Weather({ weatherData }) {
  const card = (
    <React.Fragment>
      <CardContent color="aliceblue">
        <Typography
          sx={{ fontSize: 24, fontFamily: "Ubuntu" }}
          color="navy"
          gutterBottom
        >
          Weather
        </Typography>
        <Typography variant="p" component="div"></Typography>
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <PublicIcon fontSize="small" /> Country: {weatherData.sys?.country}
        </Typography> 
        <br />
        
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <PublicIcon fontSize="small" /> Timezone: {weatherData.timezone/3600} UTC
        </Typography>  {}
        <br />
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <LocationCityIcon fontSize="small" /> City: {weatherData.name}
        </Typography>
        <br />
        <Typography
          sx={{ fontSize: 24, fontFamily: "Ubuntu" }}
          color="navy"
          gutterBottom
        >
          Current Weather:
        </Typography>
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <DeviceThermostatIcon fontSize="small" /> Temperature:{" "}
          {weatherData.main?.temp} &deg;C
        </Typography>
        <br />
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <AirIcon fontSize="small" /> Wind Speed: {weatherData.wind?.speed}
        </Typography>
        <br />
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <CloudIcon fontSize="small" /> Clouds: {weatherData.clouds?.all}
        </Typography>
        <br />
        <Typography
          sx={{ mb: 1.5, fontFamily: "Ubuntu", display: "inline-block" }}
          color="text.secondary"
          align="left"
        >
          <WaterDropIcon fontSize="small" /> Rain: {weatherData.rain?.["1h"]}
        </Typography>
        <br />
      </CardContent>
    </React.Fragment>
  );

  const input = (
    <React.Fragment>
      <input name="citySearch" />
    </React.Fragment>
  );
  return (
    <>
      <Card
        variant="outlined"
        className="card-weather"
        style={{ backgroundColor: "aliceblue" }}
      >
        {card}
      </Card>
    </>
  );
}
