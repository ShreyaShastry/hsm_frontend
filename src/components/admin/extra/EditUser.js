import { useParams } from "react-router-dom";
import UserForm from "../UserForm";
import { useEffect, useState } from "react";
import  Axios  from "axios";

function EditUser()
{
    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({UserID:"",Password:"",Role:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
            Axios.get("http://localhost:4000/UserRoute/update-user/"+id)
            .then((res)=>{
                if(res.status === 200)
                {
                    const {UserID,Password,Role} = res.data;
                    setInitialValue({UserID,Password,Role})
                }
                else
                    Promise.reject();

            })
            .catch((err)=>alert(err));
    },[id])

    const getState = (childData) => {
        setNewData(childData);
    }

    const handleSubmit = () =>{
        const data = {UserID: newData[0], Password: newData[1], Role: newData[2]};
        Axios.put("http://localhost:4000/UserRoute/update-user/"+id,data)
        .then((res)=>{
            if(res.status === 200)
                alert("Record Updated Successfully");
            else
                Promise.reject();

        })
        .catch((err)=>alert(err));
    }
        
    return(
        <form onSubmit={handleSubmit}>
            <UserForm getState={getState}
                        UserIDValue={initialValue.UserID}
                        PasswordValue = {initialValue.Password}
                        RoleValue = {initialValue.Role} />
        </form>
    )
}

export default EditUser;