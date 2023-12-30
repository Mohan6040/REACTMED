import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navContainerStyle = {
    backgroundColor: "#2196f3", // Blue background color
    color: "#fff",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    margin: "0",
    fontSize: "14px",
  };

  const navlinksStyle = {
    display: "flex",
  };

  const navLinkStyle = {
    margin: "0 10px", // Add space between links using margin
    color: "#fff",
    textDecoration: "none",
  };

  const navButtonStyle = {
    margin: "0",
    padding: "10px",
    color: "#fff",
    backgroundColor: "#1565c0", // Blue button color
    borderRadius: "15px",
    border: "none",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div style={navContainerStyle}>
      <div style={logoStyle}>
        <h1>PHARMACIST</h1>
      </div>
      <div style={navlinksStyle}>
        <Link to="/Pharmacisthome" style={navLinkStyle}>
          Home
        </Link>
        <Link to="/" style={navLinkStyle}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navigation;