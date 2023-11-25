import { useState } from "react";
import DoctorForm from "./DoctorForm";

import Axios from "axios";

function CreateDoctor()
{
    const [arr,setArr] = useState([]);
    const getState = (childData) =>{
        setArr(childData);
    }
    const handleSubmit = (event) => {
        const data = {DoctorID: arr[0], Name: arr[1], Address: arr[2], Phone: arr[3], DOB: arr[4], Email: arr[5], Qualification: arr[6], Unit: arr[7], Timings: arr[8], Salary: arr[9]};
        Axios.post("http://localhost:4000/DoctorRoute/create-doctor",data)
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record Added Successfully");
            }
            else {
                Promise.reject();
            }
        })
        .catch((err)=>console.log(err));
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <DoctorForm getState={getState} />
        </form>
    )
}

export default CreateDoctor;