import Axios from "axios";
import {Link} from "react-router-dom";
function StudentListRow(props)
{
    const {_id,DoctorID,Name,Address,Phone,DOB,Email,Qualification,Unit,Timings,Salary}=props.obj;//object destruction

    const handleClick = () =>{
        Axios.delete("http://localhost:4000/DoctorRoute/delete-doctor/" + _id )
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
            <td class="text-center">{DoctorID}</td>
            <td class="text-center">{Name}</td>
            <td class="text-center">{Address}</td>
            <td class="text-center">{Phone}</td>
            <td class="text-center">{DOB}</td>
            <td class="text-center">{Email}</td>
            <td class="text-center">{Qualification}</td>
            <td class="text-center">{Unit}</td>
            <td class="text-center">{Timings}</td>
            <td class="text-center">{Salary}</td>
            <td>
                <button class="btn btn-success m-2 ">
                    <Link class="text-decoration-none text-light" to={"/edit-doctor/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default StudentListRow;