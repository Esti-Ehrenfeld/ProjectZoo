import { useState } from 'react'
import BusinessData from './assets/components/businessData/BusinessData'
import AddAppointment from './assets/components/appointment/AddAppointment'
import ServiceList from './assets/components/services/ServicesList'
import DataStore from './assets/components/data/dataStore'
import './App.css'


function App() {

  return (
    <>
      <BusinessData />
      {/* <video controls="controls" width="100%">
        <source src="https://assets-global.website-files.com/5e26b63b5f16d0655843b3f5/5f390fe6c3b70c8113c2c95f_%D7%92'%D7%99%D7%A8%D7%A4%D7%94%20%D7%99%D7%95%D7%A0%D7%A7%D7%AANEW-transcode.webm" type="video/ogg" />
      </video> */}
      <div>
        <br />
        <AddAppointment />
        {/* רשימת ארועים */}
        <ServiceList />
        {/* הוספת פגישה */}

      </div>
    </>
  )
}

export default App
