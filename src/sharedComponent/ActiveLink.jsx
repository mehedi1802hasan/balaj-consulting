import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";
const ActiveLink = ({ to, children }) => {
  return (
    <NavLink style={{padding:0, }} to={to} className={({ isActive }) => (isActive ? "active" : "") }>
      {children}
    </NavLink>
  );
};

export default ActiveLink;