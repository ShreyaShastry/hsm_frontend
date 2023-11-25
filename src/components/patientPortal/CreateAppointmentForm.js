import React from 'react';
import { useState } from "react";
import PatientRegistrationForm from "./AppointmentForm";
import Axios from "axios";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function CreateAppointmentForm(){
    const [arr,setArr]=useState([]);
    const getState = (chilData)=>{
        setArr(chilData);
    }
    const handleSubmit=()=>{
        const data = {name:arr[0],mobile:arr[1],email:arr[2],department:arr[3],date:arr[4],time:arr[5]};
        Axios.post("http://localhost:4000/appointmentRoute/create-appointment",data)
        .then((res)=>{
            if(res.status===200){
                toast("Appointment booked successfully");
                //alert("Appointment created successfully");
                
            }
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <PatientRegistrationForm  getState={getState}/>
            <ToastContainer />
        </form>

    )
}
export default CreateAppointmentForm;