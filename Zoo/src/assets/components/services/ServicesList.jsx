import { observer } from 'mobx-react';
import React, { useEffect } from 'react'
import Service from './Service';
import AddService from './AddService';
import { getServices } from '../data/server';
import DataStore from '../data/dataStore';
import './Service.css';


const ServicesList = (observer(() => {

  useEffect(() => {
    if (!DataStore.services.length) {
      getServices();
    }

  }, [])
  return (
    <>
      <div className='service'>{DataStore.services.map((service, indexs) => {
        return <Service key={indexs} service={service}>{service.name}</Service>
      })}
      </div>
      <div>
      </div>

    </>

  )
}))
export default ServicesList


