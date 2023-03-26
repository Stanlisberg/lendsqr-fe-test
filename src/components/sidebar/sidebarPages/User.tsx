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
            <div className='wid-wrap'>
              <Widget item='user'/>
              <Widget item='activeUsers'/>
              <Widget item='usersWithLoans'/>
              <Widget item='usersWithSavings'/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default User;
