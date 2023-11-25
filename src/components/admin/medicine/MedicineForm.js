import React, { useState } from "react";
import "./MedicineForm.css";

function MedicineForm(props) {
  const [MedicineID, setMedicineID] = useState(props.MedicineIDValue);
  const [Name, setName] = useState(props.NameValue);
  const [CompanyName, setCompanyName] = useState(props.CompanyNameValue);
  const [Rate, setRate] = useState(props.RateValue);
  const [Quantity, setQuantity] = useState(props.QuantityValue);

  const arr = [MedicineID, Name, CompanyName, Rate, Quantity];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <div className="container" style={{backgroundColor: "#f0cbc0", marginTop:"10px",marginBottom:"10px"}}>
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-8 col-sm-10 col-12"style={{ textAlign:"center"}}>
          <div className="form-floating my-4">
            <input
              defaultValue={props.MedicineIDValue}
              onChange={(event) => setMedicineID(event.target.value)}
              type="text"
              className="form-control"
              id="floatingID"
              placeholder="Medicine ID" style={{ textAlign:"center"}}
            />
            <label htmlFor="floatingID">Medicine ID</label>
          </div>
          <div className="form-floating my-4">
            <input
              defaultValue={props.NameValue}
              onChange={(event) => setName(event.target.value)}
              type="text"
              className="form-control"
              id="floatingname"
              placeholder="Name"
            />
            <label htmlFor="floatingName">Name</label>
          </div>
          <div className="form-floating my-4">
            <input
              defaultValue={props.CompanyNameValue}
              onChange={(event) => setCompanyName(event.target.value)}
              type="text"
              className="form-control"
              id="floatingcompname"
              placeholder="Company Name"
            />
            <label htmlFor="floatingcompname">Company Name</label>
          </div>
          <div className="form-floating my-4">
            <input
              defaultValue={props.RateValue}
              onChange={(event) => setRate(event.target.value)}
              type="number"
              className="form-control"
              id="floatingrate"
              placeholder="Rate"
            />
            <label htmlFor="floatingrate">Rate</label>
          </div>
          <div className="form-floating my-4">
            <input
              defaultValue={props.QuantityValue}
              onChange={(event) => setQuantity(event.target.value)}
              type="number"
              className="form-control"
              id="floatingquantity"
              placeholder="Quantity"
            />
            <label htmlFor="floatingquantity">Quantity</label>
          </div>
          <button
            onClick={handleClick}
            className="btn btn-success my-3 d-block mx-auto"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MedicineForm;
