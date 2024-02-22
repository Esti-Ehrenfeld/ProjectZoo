import Swal from 'sweetalert2'
// import axios from "axios";
import DataStore from "./dataStore";

// islogin
export const CheckLogin = async (name, password) => {
  try {
    const response = await fetch('http://localhost:8787/login', {
      method: 'post',
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.status === 200) {
      console.log("good")
      DataStore.setIsLogin(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
    else {
      console.log("not good")
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "שם משתמש או סיסמא שגויים נא הקש שנית",
    });
    }
  }
  catch (error) {
    console.log(error, "error")
  }
}

//שליפה
//getAppointment
async function getAppointment() {
  try { 
    const response = await fetch('http://localhost:8787/appointments', {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await response.json()
    console.log(res)
    DataStore.setAppointment(res);

  }
  catch (error) {
    console.log(error, "error")
  }
}
async function addNewAppointment(appointment) {
   try {
    const response = await fetch('http://localhost:8787/appointment', {
      method: 'post',
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.status === 200) {
       console.log("good")
       DataStore.addNewAppointment(appointment);
    }
    else{
      throw new Error();
    }
  }
  catch (error) {
    throw new Error();
    console.log(error, "error")
  }
}
//שליפה
//getServices
async function getServices() {
  try {
    const response = await fetch('http://localhost:8787/services', {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
    let res = await response.json()
    console.log(res)
    DataStore.setServices(res);

  }
  catch (error) {
    console.log(error, "error")
  }
}
async function addServiceToServer (service) {
  try {
    const response = await fetch('http://localhost:8787/service', {
      method: 'POST',
      body: JSON.stringify( service),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.status === 200) {
      console.log("good")
      DataStore.addNewService(service);
    }
    else {
      console.log("not good")
    }
  }
  catch (error) {
    Swal.fire({
      title: "Error",
      text: "Unable to schedule the meeting",
      icon: "error",
    });
  }
}
//שליפה
//getBusinessData
async function getBusinessData() {
  try {
    const response = await fetch('http://localhost:8787/businessData', {
      method: 'get',
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.status === 200) {
   let res = await response.json()
   console.log(res)
   DataStore.setBusinessData(res);
    }
    else {
      console.log("not good")
    }

  }
  catch (error) {
    console.log(error, "error")
  }
}

async function addBusinessData(businessData) {
  
  try {
    const response = await fetch('http://localhost:8787/businessData', {
      method: 'post',
      body: JSON.stringify( businessData ),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (response.status === 200) {
      console.log("good")
       DataStore.addBusinessData(businessData);
    }
    else {
      console.log("not good")
    }
  }
  catch (error) {
    console.log(error, "error")
  }
}

export { getAppointment, getServices, getBusinessData,addServiceToServer,addNewAppointment,addBusinessData};