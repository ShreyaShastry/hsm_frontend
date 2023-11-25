import React from "react";
import { Link, useLocation } from "react-router-dom";

const navbarStyle = {
  overflow: "hidden",
  backgroundColor: "#333",
};

const navItemStyle = {
  float: "left",
  fontSize: "16px",
  color: "white",
  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
};

const subnavStyle = {
  float: "left",
  overflow: "hidden",
};

const subnavBtnStyle = {
  fontSize: "16px",
  border: "none",
  outline: "none",
  color: "black",
  padding: "14px 16px",
  backgroundColor: "inherit",
  fontFamily: "inherit",
  margin: "0",
};

const subnavContentStyle = {
  display: "none",
  position: "absolute",
  left: "0",
  backgroundColor: "red",
  width: "100%",
  zIndex: "1",
};

const subnavLinkStyle = {
  float: "left",
  color: "white",
  textDecoration: "none",
};

const PatientPortal = () => {
  const location = useLocation();
  const username = location.state?.username;
  return (
    <>
      <div style={navbarStyle}>
        <div style={subnavStyle}>
          <div style={subnavContentStyle}>
            <Link to={{pathname:"/myprofile",state:{username}}} style={subnavLinkStyle}  >My Profile</Link>
            <Link to="#" style={subnavLinkStyle}>Book Appointment</Link>
            <Link to="#" style={subnavLinkStyle}>View Booked Appointments</Link>
          </div>
        </div>
        
      </div>

    </>
  );
};

export default PatientPortal;
