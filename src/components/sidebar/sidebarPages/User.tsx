import React from "react";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import Widget from "../../../widget/Widget";
import '../../../styles/User.css'

function User() {
    return (
      <div className="user">
        <Navbar />
        <div className="user-wrapper">
          <Sidebar />
          <div className="user-component">
            <div className='widget'>
              <Widget />
              <Widget />
              <Widget />
              <Widget />
            </div>
          </div>
        </div>
      </div>
    );
}

export default User;
