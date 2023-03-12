import React from "react";
import "../../styles/Navbar.css";
import pablo from "../../icons/lendsqr.svg";
import { BiSearch } from "react-icons/bi";
import { RxBell } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="nav-component">
      <div className="navbar">
        <div className="nav-container">
          <div className="logo-div">
            <img className="logo" src={pablo}></img>
          </div>
          <div className="input-container">
            <div className="input-wrapper">
              <div className="input-div">
                <input
                  type="text"
                  className="input"
                  placeholder="Search for anything"
                />
              </div>
              <div className="search-icon-div">
                <BiSearch color="#ffffff" className="search-icon" />
              </div>
            </div>
            <div className="icon-div">
              <div className='icon'>
                 Docs
              </div>
              <div className='icon'>
                <RxBell />
              </div>
              <div className='icon'>
                <img src="" alt="" />
              </div>
              <div className='icon'>
                 Adedeji
              </div>
              <div className='icon'>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
