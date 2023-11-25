import React, { useState } from "react";
import "./PatientRegistration.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function VerticalSection() {
  return (
    <div className="vertical-section">
      <div id="background-wrap">
        <div class="bubbles-container">
          <div class="bubble x1"></div>
          <div class="bubble x2"></div>
          <div class="bubble x3"></div>
          <div class="bubble x4"></div>
          <div class="bubble x5"></div>
          <div class="bubble x6"></div>
          <div class="bubble x7"></div>
          <div class="bubble x8"></div>
          <div class="bubble x9"></div>
          <div class="bubble x10"></div>
        </div>
      </div>
    </div>
  );
}


function PatientRegistration() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    insuranceName: "",
    insuranceNumber: "",
    diabetes: false,
    hypertension: false,
    allergies: "",
    surgery: false,
    allergiesToMedications: "",
    familyMedicalHistory: "",
    currentMedications: "",
    previousSurgeries: "",
    otherMedicalConditions: "",
  });
  const handleSubmit = async (e) => {
    Axios.post("http://localhost:4000/patientRegistrationRoute/patient-registration",formData)
    .then((res)=>{
      if(res.status===200){
        toast("Registered successfully");
      }
    })
    .catch((err)=>alert(err));

  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };



  return (

    <div className="App" style={{marginTop:"10px"}}>
      <div className="content-container">
        <VerticalSection />
        <div className="form-container">
          <div className="header-box">
            <h1>Patient Registration Form</h1>
          </div>


          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <div className="name-fields">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="middleName"
                  name="middleName"
                  placeholder="Middle Name"
                  value={formData.middleName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
               
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <div className="address-fields">
                <input
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street"
                  value={formData.street}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="state"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact Information:</label>
              <div className="contact-fields">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email - Username"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="enter password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="insurance">Insurance Information:</label>
              <div className="insurance-fields">
                <input
                  type="text"
                  id="insuranceName"
                  name="insuranceName"
                  placeholder="Insurance Name"
                  value={formData.insuranceName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="insuranceNumber"
                  name="insuranceNumber"
                  placeholder="Insurance Number"
                  value={formData.insuranceNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History:</label>
              <div className="medical-history-fields">
                <div className="checkbox-group">
                  <label>
                    <input
                      type="checkbox"
                      id="diabetes"
                      name="diabetes"
                      checked={formData.diabetes}
                      onChange={handleChange}
                    />
                    Diabetes
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="hypertension"
                      name="hypertension"
                      checked={formData.hypertension}
                      onChange={handleChange}
                    />
                    Hypertension
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      id="surgery"
                      name="surgery"
                      checked={formData.surgery}
                      onChange={handleChange}
                    />
                    Surgery
                  </label>
                </div>
                <label>
                  Allergies:
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Allergies to Medications:
                  <input
                    type="text"
                    id="allergiesToMedications"
                    name="allergiesToMedications"
                    value={formData.allergiesToMedications}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Family Medical History:
                  <input
                    type="text"
                    id="familyMedicalHistory"
                    name="familyMedicalHistory"
                    value={formData.familyMedicalHistory}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Current Medications:
                  <input
                    type="text"
                    id="currentMedications"
                    name="currentMedications"
                    value={formData.currentMedications}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Previous Surgeries:
                  <input
                    type="text"
                    id="previousSurgeries"
                    name="previousSurgeries"
                    value={formData.previousSurgeries}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Other Medical Conditions:
                  <textarea
                    id="otherMedicalConditions"
                    name="otherMedicalConditions"
                    value={formData.otherMedicalConditions}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>


            <button type="submit">Submit</button>
            <ToastContainer />
          </form>

        </div>
      </div>
    </div>

  );
}

export default PatientRegistration;
