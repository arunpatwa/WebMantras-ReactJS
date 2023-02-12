import React from "react";
import {Link,Navlink } from "react-router-dom";

const Header = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
      color: isActive ? "Blue" : "white",
      fontSize: "25px"
    };
  };
  return (
    <div className="header">
      {/* <Navlink style={navLinkStyles} to ={'/'}>Home</Navlink>
      <Navlink style={navLinkStyles} to ={'/about'}>About</Navlink>
      <Navlink style={navLinkStyles} to ={'*'}>Error</Navlink> */}
      <Link to={"/"}>
        <h1 style={{ color: "white", cursor: "pointer" }}>Home</h1>{" "}
      </Link>
      <Link to={"/about"}>
        <h1 style={{ color: "white", cursor: "pointer" }}>About</h1>{" "}
      </Link>

   
    </div>
  );
};

export default Header;
