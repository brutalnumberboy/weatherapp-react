import './Weather.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';

export default function Weather({ weatherData }){

   
  const card = (
    <React.Fragment>
      <CardContent color="aliceblue">
        <Typography sx={{ fontSize: 24, fontFamily: 'Ubuntu'}} color="navy" gutterBottom>
          Weather App
        </Typography>
        <Typography variant="p" component="div">
        </Typography>
        <Typography sx={{ mb: 1.5, fontFamily: 'Ubuntu', display: 'inline-block' }} color="text.secondary" align="left">
          <PublicIcon fontSize='small'/>Country: {weatherData.sys?.country}
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5, fontFamily: 'Ubuntu', display: 'inline-block' }} color="text.secondary" align="left">
          <LocationCityIcon fontSize='small'/>City: {weatherData.name} 
        </Typography>
        <br />
        <Typography variant="body2">
            {weatherData.main?.temp}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

    return (
        <>
        <Card variant="outlined" className="card-weather" style={{backgroundColor: 'aliceblue'}}>{ card }</Card>
    </>
    );
}