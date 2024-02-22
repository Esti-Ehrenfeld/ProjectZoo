import Alert from '@mui/material/Alert';
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import Login from '../src/assets/components/admin/Login'
import BusinessData from './assets/components/businessData/BusinessData.jsx'
import AddAppointment from './assets/components/appointment/AddAppointment'
import ServicesList from './assets/components/services/ServicesList'
import AdminPage from './assets/components/admin/AdminPage';
import AppointmentList from './assets/components/appointment/AppointmentList'
import AddService from './assets/components/services/AddService'
import Service from './assets/components/services/Service'
import EditBusinessData from './assets/components/businessData/EditBusinessData'
import './index.css'
import Counter from './assets/components/appointment/Counter'
import Error from './assets/components/designs/Error'
import KindOfServices from './assets/components/appointment/KindOfServices'
import AdminHome from './assets/components/admin/AdminHome'

// npm install react-router-dom localforage match-sorter sort-by

const router = createBrowserRouter([{
  path: '',
  element: <App/>,
  errorElement:<Error/>
}, {
  path: '/Login',
  element: <AdminPage/>,
}
  , {
  path: '/BusinessData',
  element: <BusinessData />,
}
, {
  path: '/ServicesList',
  element: <ServicesList />,
}
, {
  path: '/AppointmentList',
  element: <AppointmentList />,
}
, {
  path: '/EditBusinessData',
  element: <EditBusinessData />,
}



]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
