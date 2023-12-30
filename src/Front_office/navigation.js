import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const navContainerStyle = {
    backgroundImage: "url('https://example.com/your-image.jpg')", // Replace with your image URL
    backgroundSize: "cover",
    backgroundColor: "black", // Light pink background color
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
    gap: "10px", // Add a gap of 10px between navigation links
    textDecoration: "none", // Remove text decoration for links
    color: "#fff",
  };

  const logoutLinkStyle = {
    textDecoration: "none",
    color: "#fff",
  };

  return (
    <div style={navContainerStyle}>
      <h1 style={h1Style}>Front office</h1>
      <div style={navigationStyle}>
        <Link to="/Frontofficehome" style={logoutLinkStyle}>
          Home
        </Link>
        <Link to="/Apporve" style={logoutLinkStyle}>
          Approve
        </Link>
        <Link to="/Book" style={logoutLinkStyle}>
          Book
        </Link>
        <Link to="/ViewAll" style={logoutLinkStyle}>
          View All
        </Link>
       
        <Link to="/" style={logoutLinkStyle}>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navigation;