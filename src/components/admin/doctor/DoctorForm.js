import React, { useState } from "react";
import "./DoctorForm.css";

function DoctorForm(props) {
  const [DoctorID, setDoctorID] = useState(props.DoctorIDValue);
  const [Name, setName] = useState(props.NameValue);
  const [Address, setAddress] = useState(props.AddressValue);
  const [Phone, setPhone] = useState(props.PhoneValue);
  const [DOB, setDOB] = useState(props.DOBValue);
  const [Email, setEmail] = useState(props.EmailValue);
  const [Qualification, setQualification] = useState(props.QualificationValue);
  const [Unit, setUnit] = useState(props.UnitValue);
  const [Timings, setTimings] = useState(props.TimingsValue);
  const [Salary, setSalary] = useState(props.SalaryValue);

  const arr = [
    DoctorID,
    Name,
    Address,
    Phone,
    DOB,
    Email,
    Qualification,
    Unit,
    Timings,
    Salary,
  ];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <>
    
    <div className="form-background" style={{ backgroundColor: "#e4e6c7" }}>
      <div className="container">
        <div className="row justify-content-center"style={{width:"120%"}}>
          <div className="col-13 col-md-12 col-lg-8" >
            <h2 className="text-center mt-5 mb-4">Doctor Form</h2>
            <div className="form-floating my-2">
              <input
                defaultValue={props.DoctorIDValue}
                onChange={(event) => setDoctorID(event.target.value)}
                type="text"
                className="form-control"
                id="floatingID"
                placeholder="Enter Doctor ID"
              />
              <label htmlFor="floatingID">Doctor ID</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.NameValue}
                onChange={(event) => setName(event.target.value)}
                type="text"
                className="form-control"
                id="floatingname"
                placeholder="Enter Name"
              />
              <label htmlFor="floatingname">Name</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.AddressValue}
                onChange={(event) => setAddress(event.target.value)}
                type="text"
                className="form-control"
                id="floatingaddress"
                placeholder="Enter Address"
              />
              <label htmlFor="floatingaddress">Address</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.PhoneValue}
                onChange={(event) => setPhone(event.target.value)}
                type="text"
                className="form-control"
                id="floatingphone"
                placeholder="Enter Phone"
              />
              <label htmlFor="floatingphone">Phone</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.DOBValue}
                onChange={(event) => setDOB(event.target.value)}
                type="date"
                className="form-control"
                id="floatingdob"
                placeholder="Select Date of Birth"
              />
              <label htmlFor="floatingdob">DOB</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.EmailValue}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                className="form-control"
                id="floatingemail"
                placeholder="Enter Email"
              />
              <label htmlFor="floatingemail">Email</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.QualificationValue}
                onChange={(event) => setQualification(event.target.value)}
                type="text"
                className="form-control"
                id="floatingqualification"
                placeholder="Enter Qualification"
              />
              <label htmlFor="floatingqualification">Qualification</label>
            </div>
            <div className="form-floating my-2">
              <input
                defaultValue={props.UnitValue}
                onChange={(event) => setUnit(event.target.value)}
                type="text"
                className="form-control"
                id="floatingunit"
                placeholder="Enter Unit"
              />
              <label htmlFor="floatingunit">Unit</label>
            </div>
            <select
              defaultValue={props.TimingsValue}
              onChange={(event) => setTimings(event.target.value)}
              className="form-select my-2"
              aria-label="Default select example"
              id="floatingtimings"
            >
              <option value="" disabled>Select Timings</option>
              <option value="Mon-Wed-Fri">Mon-Wed-Fri</option>
              <option value="Tue-Thu-Sat">Tue-Thu-Sat</option>
            </select>
            <div className="form-floating my-2">
              <input
                defaultValue={props.SalaryValue}
                onChange={(event) => setSalary(event.target.value)}
                type="number"
                className="form-control"
                id="floatingsalary"
                placeholder="Enter Salary"
              />
              <label htmlFor="floatingsalary">Salary</label>
            </div>
            <button
              onClick={handleClick}
              className="btn btn-primary my-3 d-block mx-auto"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default DoctorForm;
