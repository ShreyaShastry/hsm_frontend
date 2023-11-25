import { useState } from "react";
import MedicineForm from "./MedicineForm";
import Axios from "axios";

function CreateMedicine()
{
    const [arr,setArr] = useState([]);
    const getState = (childData) =>{
        setArr(childData);
    }
    const handleSubmit = (event) => {
        const data = {MedicineID: arr[0], Name: arr[1], CompanyName: arr[2], Rate: arr[3], Quantity: arr[4]};
        Axios.post("http://localhost:4000/MedicineRoute/create-medicine",data)
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
            <MedicineForm getState={getState} />
        </form>
    )
}

export default CreateMedicine;