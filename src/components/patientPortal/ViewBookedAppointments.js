import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MyProfile.css";

function ViewBookedApointments(props) {
    console.log("At myprofile");

  const [patientData, setPatientData] = useState(null);

  useEffect(() => {
    // Make a GET request to fetch patient data
    Axios.get('http://localhost:4000/appointmentRoute')
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
    <h2>BOOKED APPOINTMENTS</h2>
      <table className="patient-table">
        <tbody>
          <tr>
            <td className="label">Patient Name:</td>
            <td className="text-center">{patientData.name}</td>
          </tr>
          
          <tr>
            <td className="label">Doctor Department:</td>
            <td className="text-center">{patientData.department}</td>
          </tr>
          <tr>
            <td className="label">Date:</td>
            <td className="text-center">{patientData.date}</td>
          </tr>
          <tr>
            <td className="label">Time:</td>
            <td className="text-center">{patientData.time}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
  
}

export default ViewBookedApointments;
