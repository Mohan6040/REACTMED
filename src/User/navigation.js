// Navigation.js

import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navContainerStyle = {
    backgroundColor: "black", // black background
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const h1Style = {
    margin: "10px",
    fontSize: "34px",
  };

  const navigationStyle = {
    display: "flex",
    gap: "10px", // Add a gap of 10px between buttons
  };

  const navButtonStyle = {
    margin: "0",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#2196f3", // Blue button color
    border: "none",
    textDecoration: "none",
    cursor: "pointer",
  };

  const logoutButtonStyle = {
    ...navButtonStyle,
    backgroundColor: "#FF0000", // Red button color
  };

  const navButtonHoverStyle = {
    backgroundColor: "#1565c0", // Darker blue on hover
    borderRadius: "5px",
  };

  return (
    <div style={navContainerStyle}>
      <h1 style={h1Style}>USER</h1>
      <div style={navigationStyle}>
        <Link to="/Userhome" style={{ textDecoration: "none", color: "#fff" }}>
        HOME
      </Link>
        <Link to="/UserBook" style={{ textDecoration: "none", color: "#fff" }}>
          APPOINTMENT
        </Link>
        <Link to="/Userchat" style={{ textDecoration: "none", color: "#fff" }}>
          CHAT
        </Link>
        <Link to="/Doctorlist" style={{ textDecoration: "none", color: "#fff" }}>
          DOCTOR LIST
        </Link>
        <Link to="/UserMedicene" style={{ textDecoration: "none", color: "#fff" }}>
          MEDICINE
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
         Logout
        </Link>
      </div>
    </div>
  );
};