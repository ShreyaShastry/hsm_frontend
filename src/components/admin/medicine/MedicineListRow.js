import Axios from "axios";
import {Link} from "react-router-dom";
function MedicineListRow(props)
{
    const {_id,MedicineID,Name,CompanyName,Rate,Quantity}=props.obj;//object destruction

    const handleClick = () =>{
        Axios.delete("http://localhost:4000/MedicineRoute/delete-medicine/" + _id )
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
            <td class="text-center">{MedicineID}</td>
            <td class="text-center">{Name}</td>
            <td class="text-center">{CompanyName}</td>
            <td class="text-center">{Rate}</td>
            <td class="text-center">{Quantity}</td>
            <td class="text-center">
                <button class="btn btn-success m-2">
                    <Link class="text-decoration-none text-light" to={"/edit-medicine/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default MedicineListRow;