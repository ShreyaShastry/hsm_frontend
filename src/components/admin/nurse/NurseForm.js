import { useState } from "react";


function NurseForm(props)
{
    const [NurseID,setNurseID] = useState(props.NurseIDValue);
    const [Name,setName] = useState(props.NameValue);
    const [Address,setAddress] = useState(props.AddressValue);
    const [Phone,setPhone] = useState(props.PhoneValue);
    const [DOB,setDOB] = useState(props.DOBValue);
    const [Email,setEmail] = useState(props.EmailValue);
    const [Qualification,setQualification] = useState(props.QualificationValue);
    const [Unit,setUnit] = useState(props.UnitValue);
    const [Salary,setSalary] = useState(props.SalaryValue);

    const arr = [NurseID,Name,Address,Phone,DOB,Email,Qualification,Unit,Salary];

    const handleClick = () =>{
        props.getState(arr);
    }

    return(
        <div style={{Width:"100%",maxHeight:"100%",backgroundColor:"#eff1c299"}}>
            <div style={{maxWidth:"40%",margin:"0px auto",padding:"40px"}}>
                <div class="form-floating my-2">
                        <input defaultValue={props.NurseIDValue} onChange={(event)=>setNurseID(event.target.value)} type="text" class="form-control" id="floatingID" placeholder="Doctor ID" required />
                        <label for="floatingID">Nurse ID</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.NameValue} onChange={(event)=>setName(event.target.value)} type="text" class="form-control" id="floatingname" placeholder="Name" required />
                        <label for="floatingName">Name</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.AddressValue} onChange={(event)=>setAddress(event.target.value)} type="text" class="form-control" id="floatingaddress" placeholder="Address" required />
                        <label for="floatingaddress">Address</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.PhoneValue} onChange={(event)=>setPhone(event.target.value)} type="text" class="form-control" id="floatingphone" placeholder="Quantity" required />
                        <label for="floatingphone">Phone</label>
                </div>
                <div class="form-floating my-2">
                    <input defaultValue={props.DOBValue} onChange={(event)=>setDOB(event.target.value)} type="date" class="form-control" id="floatingemail"  />
                    <label for="floatingemail">DOB</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.EmailValue} onChange={(event)=>setEmail(event.target.value)} type="email" class="form-control" id="floatingemail" placeholder="Email" required />
                        <label for="floatingemail">Email</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.QualificationValue} onChange={(event)=>setQualification(event.target.value)} type="text" class="form-control" id="floatingjob" placeholder="Qualification" required />
                        <label for="floatingjob">Qualification</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.UnitValue} onChange={(event)=>setUnit(event.target.value)} type="text" class="form-control" id="floatingunit" placeholder="Unit" required />
                        <label for="floatingunit">Unit</label>
                </div>
                <div class="form-floating my-2">
                        <input defaultValue={props.SalaryValue} onChange={(event)=>setSalary(event.target.value)} type="number" class="form-control" id="floatingsalary" placeholder="Salary" required />
                        <label for="floatingSalary">Salary</label>
                </div>
                <button onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">Submit</button>
            </div>
        </div>
    )
}

export default NurseForm;

