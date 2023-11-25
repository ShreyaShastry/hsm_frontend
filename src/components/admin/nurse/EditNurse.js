import { useParams } from "react-router-dom";
import NurseForm from "./NurseForm";
import { useEffect, useState } from "react";
import  Axios  from "axios";

function EditNurse()
{
    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({NurseID:"",Name:"",Address:"",Phone:"",Email:"",Qualification:"",Unit:"",Salary:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
            Axios.get("http://localhost:4000/NurseRoute/update-nurse/"+id)
            .then((res)=>{
                if(res.status === 200)
                {
                    const {NurseID,Name,Address,Phone,Email,Qualification,Unit,Salary} = res.data;
                    setInitialValue({NurseID,Name,Address,Phone,Email,Qualification,Unit,Salary})
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
        const data = {NurseID: newData[0], Name: newData[1], Address: newData[2], Phone: newData[3], Email: newData[4], Qualification: newData[5], Unit: newData[6], Salary: newData[7]};
        Axios.put("http://localhost:4000/NurseRoute/update-nurse/"+id,data)
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
            <NurseForm getState={getState}
                        NurseIDValue={initialValue.NurseID}
                        NameValue = {initialValue.Name}
                        AddressValue={initialValue.Address}
                        PhoneValue = {initialValue.Phone}
                        EmailValue = {initialValue.Email}
                        QualificationValue = {initialValue.Qualification}
                        UnitValue = {initialValue.Unit}
                        SalaryValue = {initialValue.Salary} />
        </form>
    )
}

export default EditNurse;