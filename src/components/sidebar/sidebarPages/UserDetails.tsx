import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import LendsqrContext from "../../context/LendsqrContext";
import { ReactComponent as LessThan } from "../../../assets/userDetailsSvg/lessthan.svg";
import "../../../styles/UserDetails.css";

function UserDetails() {
  const { getUserDetails, userDetails } = useContext(LendsqrContext);
  const { details } = useParams();

  useEffect(() => {
    getUserDetails(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${details}`
    );
  }, []);

  console.log(userDetails);

  return (
    <div className="user">
      <Navbar />
      <div className="user-wrapper">
        <Sidebar />
        <div className="user-component">
          <div className="details-component">
            <div className="first-column">
              <div className="first-row">
                <LessThan />
                <p className='back'>Back to Users</p>
              </div>
              <div className="second row">
                <p>User Details</p>
                <div>
                  <div>Blacklist user</div>
                  <div>Active user</div>
                </div>
              </div>
              <div className="third-row">
                <div className="third-row-wrapper">
                  <div className="first-div"></div>
                  <div className="second-div">
                    <p> Frank Morrison</p>
                    <p>Liu7687yuh9</p>
                  </div>
                  <div className="third-div">
                    <p>user tier</p>
                    <p></p>
                  </div>
                  <div className="forth-div">
                    <p>#2000000</p>
                    <p>providus bank</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-column">
              <div>General Details</div>
              <div>Documents</div>
              <div>Bank Details</div>
              <div>Loans</div>
              <div>Savings</div>
              <div>App and System</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
