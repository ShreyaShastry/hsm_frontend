import Axios from "axios";
import { useEffect, useState } from "react";
import DoctorListRow from "./DoctorListRow";
function DoctorList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/DoctorRoute/")
        .then((res)=>{
            if(res.status === 200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=> alert(err));
    },[])

    const ListItems = () =>{
        return arr.map((val,ind)=>{
            return <DoctorListRow obj={val}/>
        })
    }

    return(
        <div style={{Width:"100%",Height:"100%",backgroundColor:"#e4e6c7"}} class="mb-3 p-5">
            <h2>Doctor List</h2>
            <table style={{maxWidth:"80%",padding:"100px",border:"1px solid"}} class="mx-auto table table-bordered table-hover table-info">
                <thead class="table-light table-info">
                <tr>
                    <th class="text-center">Doctor ID</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Address</th>
                    <th class="text-center">Phone</th>
                    <th class="text-center">DOB</th>
                    <th class="text-center">Email</th>
                    <th class="text-center">Qualification</th>
                    <th class="text-center">Unit</th>
                    <th class="text-center">Timings</th>
                    <th class="text-center">Salary</th>
                    <th class="text-center">Action</th>
                </tr>
                </thead>
                <tbody class="table-group-divider">
                    {ListItems()}
                </tbody>
            </table>
        </div>
    )
}


export default DoctorList;