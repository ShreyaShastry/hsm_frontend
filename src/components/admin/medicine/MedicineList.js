import Axios from "axios";
import { useEffect, useState } from "react";
import MedicineListRow from "./MedicineListRow";
function MedicineList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/MedicineRoute/")
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
            return <MedicineListRow obj={val}/>
        })
    }

    return(
        <div style={{Width:"100%",Height:"100%",backgroundColor:"#f0cbc0"}} class="mb-3 p-5">
            <table style={{maxWidth:"80%",padding:"100px"}} class="mx-auto table table-bordered table-hover table-info">
                <thead class="table-light table-info">
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th class="text-center">Medicine ID</th>
                    <th class="text-center">Name</th>
                    <th class="text-center">Company Name</th>
                    <th class="text-center">Rate</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Action</th>
                </tr>
                 </thead>
                <tbody>
                    {ListItems()}
                </tbody>
            </table>
        </div>
    )
}


export default MedicineList;