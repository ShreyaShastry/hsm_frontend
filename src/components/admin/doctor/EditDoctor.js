import { useParams } from "react-router-dom";
import DoctorForm from "./DoctorForm";
import { useEffect, useState } from "react";
import  Axios  from "axios";

function EditDoctor()
{
    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({DoctorID:"",Name:"",Email:"",Address:"",Phone:"",Qualification:"",Unit:"",Timings:"",Salary:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
            Axios.get("http://localhost:4000/DoctorRoute/update-doctor/"+id)
            .then((res)=>{
                if(res.status === 200)
                {
                    const {DoctorID,Name,Email,Address,Phone,Qualification,Unit,Timings,Salary} = res.data;
                    setInitialValue({DoctorID,Name,Email,Address,Phone,Qualification,Unit,Timings,Salary})
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
        const data = {DoctorID: newData[0], Name: newData[1], Email: newData[2], Address: newData[3], Phone: newData[4], Qualification: newData[5], Unit: newData[6], Timings: newData[7], Salary: newData[8]};
        Axios.put("http://localhost:4000/DoctorRoute/update-doctor/"+id,data)
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
            <DoctorForm getState={getState}
                        DoctorIDValue={initialValue.DoctorID}
                        NameValue = {initialValue.Name}
                        EmailValue = {initialValue.Email}
                        AddressValue={initialValue.Address}
                        PhoneValue = {initialValue.Phone}
                        QualificationValue = {initialValue.Qualification}
                        UnitValue = {initialValue.Unit}
                        TimingsValue={initialValue.Timings}
                        SalaryValue = {initialValue.Salary} />
        </form>
    )
}

export default EditDoctor;