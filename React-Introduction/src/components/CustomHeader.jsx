import React from "react";
import { Link } from "react-router-dom";

// import "./CustomHeader.css";

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#007BFF", // Navbar background color
  padding: "20px 20px",
  color: "#fff", // Text color
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)", // Add a subtle shadow
  borderRadius: "8px",
};

const logoStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  textTransform: "uppercase",
};

const linkContainerStyle = {
  display: "flex",
  gap: "10px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff", // Link text color
  fontWeight: "bold",
  //   transition: "color 0.3s ease-in-out",
};

const activeLinkStyle = {
  color: "#FFD700", // Active link text color (yellow)
};

const CustomHeader = () => {
  return (
    <div style={headerStyle}>
      <div style={logoStyle}>Logo</div>

      <div style={linkContainerStyle}>
        <div>
          <Link
            to="/"
            style={linkStyle}
            activeStyle={activeLinkStyle}
            className="nav-link"
          >
            HOME
          </Link>
        </div>
        <div>
          <Link
            to="/create"
            style={linkStyle}
            activeStyle={activeLinkStyle}
            className="nav-link"
          >
            CREATE
          </Link>
        </div>
        <div>
          <Link
            to="/update"
            style={linkStyle}
            activeStyle={activeLinkStyle}
            className="nav-link"
          >
            UPDATE
          </Link>
        </div>
        <div>
          <Link
            to="/delete"
            style={linkStyle}
            activeStyle={activeLinkStyle}
            className="nav-link"
          >
            DELETE
          </Link>
        </div>
        <div>
          <Link
            to="/sign-up"
            style={linkStyle}
            activeStyle={activeLinkStyle}
            className="nav-link"
          >
            SIGN-UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
