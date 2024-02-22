
import { observer } from 'mobx-react';
import React,{useEffect} from 'react'
import {getBusinessData}from '../data/server'
import DataStore from '../data/dataStore';
import './Business.css';


const BusinessData = (observer(() => {
  const bd = DataStore.businessDatas;
  console.log("businessData", bd);

  useEffect(() => {
    getBusinessData();
}, [])

  return (
<>
    <header >

      <div className='header'>
        <img id='logo' src={bd.logo} alt="Business Logo" />

        <p>{bd ?.businessName}</p>
        <p>{bd ?.address}</p>
        <p>{bd ?.phone}</p>
        <p>{bd ?.details}</p>
      </div>

    </header >
    <div>
          <img  id="img-header"src={bd.img} alt="Business image" />
        </div>
    </>
  );
}));

export default BusinessData;


//  function BusinessData({bd}){

//   useEffect(() => {
//     const res=getBusinessData();
//     console.log(res);
// }, [])
//   return (
//    <>

   
//    <div>
//     <image src={bd ?.img}/>
//     <p>{bd ?.businessName}</p>
//     <p>{bd ?.address}</p>
//     <p>{bd ?.phone}</p>
//     <p>{bd ?.details}</p>
//    </div>
//    </>

//   )
// }
// export default BusinessData
