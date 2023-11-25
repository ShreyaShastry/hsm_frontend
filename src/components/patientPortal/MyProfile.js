import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MyProfile.css";

function MyProfile(props) {
    console.log("At myprofile");

  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch patient data
    Axios.get('http://localhost:4000/patientRegistrationRoute')
      .then((res) => {
        console.log(res);
        setPatientData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching patient data", error);
      });
  }, []); // Empty dependency array ensures the effect runs once on mount

  if (!patientData) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <h2>PATIENT PROFILE</h2>
      <table className="patient-table">
        <tbody>
          <tr>
            <td className="label">First Name:</td>
            <td className="text-center">{patientData.firstName}</td>
          </tr>
          <tr>
            <td className="label">Middle Name:</td>
            <td className="text-center">{patientData.middleName}</td>
          </tr>
          <tr>
            <td className="label">Last Name:</td>
            <td className="text-center">{patientData.lastName}</td>
          </tr>
          <tr>
            <td className="label">Street:</td>
            <td className="text-center">{patientData.street}</td>
          </tr>
          <tr>
            <td className="label">City:</td>
            <td className="text-center">{patientData.city}</td>
          </tr>
          <tr>
            <td className="label">State:</td>
            <td className="text-center">{patientData.state}</td>
          </tr>
          <tr>
            <td className="label">Zip Code:</td>
            <td className="text-center">{patientData.zipCode}</td>
          </tr>
          <tr>
            <td className="label">Email:</td>
            <td className="text-center">{patientData.email}</td>
          </tr>
          <tr>
            <td className="label">Phone:</td>
            <td className="text-center">{patientData.phone}</td>
          </tr>
          {/* Add similar lines for other fields */}
        </tbody>
      </table>
    </>
  );
  
}

export default MyProfile;
