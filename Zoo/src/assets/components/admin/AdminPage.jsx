
import { observer } from 'mobx-react'
import React from 'react'
import DataStore from '../data/dataStore'
import AdminHome from './AdminHome'
import Login from './Login'




const AdminPage=(observer(() =>{
  return (
    <>
    {console.log(DataStore.isLogin)}
    {!DataStore.isLogin ? <Login/> : <AdminHome/>}


    </>
  )
}))

export default AdminPage