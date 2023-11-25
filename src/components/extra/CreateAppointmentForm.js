import { useState } from "react";
import PatientRegistrationForm from "./AppointmentForm";

function CreatePatient(){
    const [arr,setArr]=useState([]);
    const getState = (chilData)=>{
        setArr(chilData);
    }
    return(
        <form>
            <PatientRegistrationForm  getState={getState}/>
        </form>
    )
}
export default CreatePatient;