import React from "react";
import "../styles/Navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left">
          <div className="logo">EDYODA</div>
          <div className="dropdown">
            <div>Cources</div>
            <div className="ri">
              <RiArrowDropDownLine />
            </div>
          </div>
          <div className="dropdown">
            <div>Programs</div>
            <div className="ri">
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
        <div className="right">
          <div>
            <BiSearch />
          </div>
          <div>Log in</div>
          <div className="btn">JOIN NOW</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
