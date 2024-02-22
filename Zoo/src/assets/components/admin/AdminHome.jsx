import { observer } from 'mobx-react'
import React,{useState} from 'react'
import './Admin.css';
import AddService from './../services/AddService';
import BusinessData from '../businessData/BusinessData'
import ServicesList from './../services/ServicesList';
import EditBusinessData from '../businessData/EditBusinessData'
import AppointmentList from '../appointment/AppointmentList';

const AdminHome = (observer(() => {

  const [openServices, setOpenServices] = useState(true);
  const [openAppointment, setOpenAppointment] = useState(false);

  const handleOpenServices = () => {
    setOpenServices(true)
    setOpenAppointment(false)
  }

  const handleOpenAppointment = () => {
    setOpenAppointment(true)
    setOpenServices(false)
  }
  return (
   <>
     <BusinessData />
     <div id="buttons">
        <button onClick={handleOpenServices}>שירותים</button>
        <button  onClick={handleOpenAppointment}>רכישות</button>
        <AddService />
        <EditBusinessData/>
      </div>
      {openServices && <ServicesList setOpenServices={setOpenServices}></ServicesList>}
      {openAppointment && <AppointmentList></AppointmentList>}
   </>
  )
}))

export default AdminHome