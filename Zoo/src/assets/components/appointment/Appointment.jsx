import React from 'react'
import './Appointment.css'


  const Appointment = ({ appointment }) => {
    let color = 'later';

    if (
      new Date(appointment.date).setHours(0, 0, 0, 0) == new Date().setHours(0, 0, 0, 0)) {
      color = 'today';
    }
    else if (
      new Date(appointment.date) < new Date().setDate(new Date().getDate() + 7)) {
      color = 'thisWeek';
    }
    
  return (
    <>
  <div className='appointment' >
    <div className={`${color}`}>
          <p>שרות: {appointment.service}</p>
            <p>תאריך: {appointment.date}</p>
            <p>שם: {appointment.name}</p>
            <p>אמייל: {appointment.email}</p>
            <p>כמות מבוגרים: {appointment.countAdult}</p>
            <p>כמות ילדים: {appointment.countChild}</p>
    </div>
    </div>
    </>
    
  )
}

export default Appointment