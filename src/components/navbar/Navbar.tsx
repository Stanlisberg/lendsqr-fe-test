import React from "react";
import "../../styles/Navbar.css";
import pablo from "../../icons/lendsqr.svg";
import image from '../../icons/img.jpg'
import { BiSearch } from "react-icons/bi";
// import { RxBell } from "react-icons/rx";
import {ReactComponent as Bell} from '../../assets/svg/bell.svg'
import {ReactComponent as Arrow} from '../../assets/svg/arrow.svg'

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
              <div className='icon one'>
                 Docs
              </div>
              <div className='icon two'>
                {/* <RxBell size='20'/> */}
                <Bell />
              </div>
              <div className=' icon three'>
                <img src={image} alt="" />
              </div>
              <div className=' icon four'>
                 Adedeji
              </div>
              <div className=' icon five'>
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
