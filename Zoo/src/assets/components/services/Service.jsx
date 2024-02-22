
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { useEffect } from 'react'
import { observer } from 'mobx-react';
import DataStore from '../data/dataStore';
import './Service.css';

const Service = ({ service }) => {
  useEffect(() => {
    console.log(service.img);
    return () => {
    }
  }, [service])
  return (
    <div className='font'>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="310"
            image={service.img}
            alt={service.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              { }
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>{service.name}</p>
              <p>{service.descripition}</p>
              <p>מחירון לילד: {service.child}</p>
              <p>מחירון למבוגר: {service.adult}</p>

            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>

  );
}

export default Service
