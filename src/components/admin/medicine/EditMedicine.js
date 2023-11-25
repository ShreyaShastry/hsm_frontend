import { useParams } from "react-router-dom";
import MedicineForm from "./MedicineForm";
import { useEffect, useState } from "react";
import  Axios  from "axios";

function EditMedicine()
{
    const {id} = useParams();
    const [initialValue,setInitialValue] = useState({MedicineID:"",Name:"",CompanyName:"",Rate:"",Quantity:""});
    const [newData, setNewData] = useState([]);

    useEffect(()=>{
            Axios.get("http://localhost:4000/MedicineRoute/update-medicine/"+id)
            .then((res)=>{
                if(res.status === 200)
                {
                    const {MedicineID,Name,CompanyName,Rate,Quantity} = res.data;
                    setInitialValue({MedicineID,Name,CompanyName,Rate,Quantity})
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
        const data = {MedicineID: newData[0], Name: newData[1], CompanyName: newData[2],Rate: newData[3],Quantity: newData[4]};
        Axios.put("http://localhost:4000/MedicineRoute/update-medicine/"+id,data)
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
            <MedicineForm getState={getState}
                        MedicineIDValue={initialValue.MedicineID}
                        NameValue = {initialValue.Name}
                        CompanyNameValue = {initialValue.CompanyName}
                        RateValue = {initialValue.Rate}
                        QuantityValue = {initialValue.Quantity} />
        </form>
    )
}

export default EditMedicine;