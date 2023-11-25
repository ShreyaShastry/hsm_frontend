import React from "react";
import { Link } from "react-router-dom";

const navbarStyle = {
  overflow: "hidden",
  backgroundColor: "#333",
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
  display: "block",
  position: "absolute",
  left: "0",
  backgroundColor: "grey",
  width: "100%",
  zIndex: "1",
};

const subnavLinkStyle = {
  float: "left",
  color: "white",
  textDecoration: "none",
};

const AdminPortal = () => {
  return (
    <>
      <Link to="/create-doctor">
        <button style={subnavBtnStyle}>Create doctor</button>
      </Link>
      <Link to="/edit-doctor/:id">
        <button style={subnavBtnStyle}>Edit doctor</button>
      </Link>
      <Link to="/doctor-list">
        <button style={subnavBtnStyle}>View all doctors</button>
      </Link>
      <Link to="/create-nurse">
        <button style={subnavBtnStyle}>Create nurse</button>
      </Link>
      <Link to="/edit-nurse/:id">
        <button style={subnavBtnStyle}>Edit nurse</button>
      </Link>
      <Link to="/create-medicine">
        <button style={subnavBtnStyle}>Create medicine</button>
      </Link>
      <Link to="/edit-medicine/:id">
        <button style={subnavBtnStyle}>Edit medicine</button>
      </Link>
      <Link to="/medicine-list">
        <button style={subnavBtnStyle}>View all medicines</button>
      </Link>
      <Link to="/nurse-list">
        <button style={subnavBtnStyle}>View all nurse</button>
      </Link>
    </>
  );
};

export default AdminPortal;
