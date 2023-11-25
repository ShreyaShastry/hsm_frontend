import { useState } from "react";
import UserForm from "../UserForm";
import Axios from "axios";

function CreateUser()
{
    const [arr,setArr] = useState([]);
    const getState = (childData) =>{
        setArr(childData);
    }
    const handleSubmit = (event) => {
        const data = {UserID: arr[0], Password: arr[1], Role: arr[2]};
        Axios.post("http://localhost:4000/UserRoute/create-user",data)
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
            <UserForm getState={getState} />
        </form>
    )
}

export default CreateUser;