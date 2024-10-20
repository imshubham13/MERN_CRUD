import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/AddStudent">Add Student</NavLink>
      <NavLink to="/Display">Display Student</NavLink>
    </div>
  );
};

export default Header;
