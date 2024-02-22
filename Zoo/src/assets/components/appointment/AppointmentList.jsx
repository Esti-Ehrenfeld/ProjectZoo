import DialogTitle from '@mui/material/DialogTitle'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { observer } from 'mobx-react'
import React, { useEffect, useState } from 'react'
import { getAppointment } from '../data/server'
import DataStore from '../data/dataStore'
import Appointment from './Appointment'




const AppointmentList = observer(() => {

  useEffect(() => {
    if (!DataStore.appointments.length) {
      getAppointment()
    }
    // getAppointment()
  }, [])

  const [appointment, setAppointment] = useState({ selectedDate: "", selectedService: "" })

  return (
    <>
      <div style={{ textAlign: 'center', backgroundColor: 'white', color: 'black' }}>
        <h1>רשימת רכישות</h1>
        <DialogTitle> בחר תאריך רצוי</DialogTitle>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={appointment.selectedDate}
            dateFormat="dd/MM/yyyy"
            onChange={(target) => setAppointment({ ...appointment, selectedDate: new Date(target.toString()) })}
            disablePast
          />
        </LocalizationProvider>
      </div>
   

      <div className='appointmentList'>
        {DataStore.appointments.filter((x) =>
          (appointment.selectedDate === "" || new Date(appointment.selectedDate).toDateString() === new Date(x.date).toDateString()))
          .map((a, i) => <Appointment key={i} appointment={a}></Appointment>)}
      </div>
    </>
  )
})

export default AppointmentList