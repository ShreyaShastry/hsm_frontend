import Axios from "axios";
import { useEffect, useState } from "react";
import UserListRow from "./UserListRow";
function UserList()
{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/UserRoute/")
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
            return <UserListRow obj={val}/>
        })
    }

    return(
        <div style={{Width:"100%",Height:"100%",backgroundColor:"teal"}} class="mb-3 p-5">
            <table style={{maxWidth:"80%",padding:"100px"}} class="mx-auto table table-bordered table-hover table-info">
                <thead class="table-light table-info">
                <tr style={{backgroundColor:"forestgreen"}}>
                    <th class="text-center">User ID</th>
                    <th class="text-center">Password</th>
                    <th class="text-center">Role</th>
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


export default UserList;