import { useState } from "react";
import NurseForm from "./NurseForm";
import Axios from "axios";

function CreateNurse()
{
    const [arr,setArr] = useState([]);
    const getState = (childData) =>{
        setArr(childData);
    }
    const handleSubmit = (event) => {
        const data = {NurseID: arr[0], Name: arr[1],  Address: arr[2], Phone: arr[3], DOB: arr[4], Email: arr[5], Qualification: arr[6], Unit: arr[7], Salary: arr[8]};
        Axios.post("http://localhost:4000/NurseRoute/create-nurse",data)
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
            <NurseForm getState={getState} />
        </form>
    )
}

export default CreateNurse;