import Axios from "axios";
import {Link} from "react-router-dom";
function UserListRow(props)
{
    const {_id,UserID,Password,Role}=props.obj;//object destruction

    const handleClick = () =>{
        Axios.delete("http://localhost:4000/UserRoute/delete-user/" + _id )
        .then((res)=>{
            if(res.status === 200)
            {
                alert("Record Deleted Successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }

    return(
        <tr>
            <td class="text-center">{UserID}</td>
            <td class="text-center">{Password}</td>
            <td class="text-center">{Role}</td>
            <td class="text-center">
                <button class="btn btn-success m-2">
                    <Link class="text-decoration-none text-light" to={"/edit-user/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default UserListRow;