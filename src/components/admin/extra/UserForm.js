import { useState } from "react";


function UserForm(props)
{
    const [UserID,setUserID] = useState(props.UserIDValue);
    const [Password,setPassword] = useState(props.PasswordValue);
    const [Role,setRole] = useState(props.RoleValue);

    const arr = [UserID,Password,Role];

    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{Width:"100%",maxHeight:"100%",backgroundColor:"teal"}}>
            <div style={{maxWidth:"40%",margin:"0px auto",padding:"150px"}}>
                <div class="form-floating my-4">
                    <input defaultValue={props.UserIDValue} onChange={(event)=>setUserID(event.target.value)} type="text" class="form-control" id="floatingID" placeholder="User ID" />
                    <label for="floatingID">User ID</label>
                </div>
                <div class="form-floating my-4">
                    <input defaultValue={props.PasswordValue} onChange={(event)=>setPassword(event.target.value)} type="password" class="form-control" id="floatingpwd" placeholder="Password" />
                    <label for="floatingpwd">Password</label>
                </div>
                <div class="form-floating my-4">
                    <input defaultValue={props.RoleValue} onChange={(event)=>setRole(event.target.value)} type="text" class="form-control" id="floatingrole" placeholder="Role" />
                    <label for="floatingrole">Role</label>
                </div>
                <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
            </div>
        </div>
    )
}

export default UserForm;
    