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
            <div className="first-segment">
              <div className="first-row">
                <LessThan />
                <p className='back-text'>Back to Users</p>
              </div>
              <div className="second-row">
                <p className='user-details-text'>User Details</p>
                <div className='black-active-div'>
                  <div className='blacklist'>Blacklist user</div>
                  <div className='activate-user'>Activate user</div>
                </div>
              </div>
            </div>
            <div className='second-segment'>
                <div className="first-row-wrapper">
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
                <div className="second-row-wrapper">
                  <div>General Details</div>
                  <div>Documents</div>
                  <div>Bank Details</div>
                  <div>Loans</div>
                  <div>Savings</div>
                  <div>App and System</div>
                </div>
            </div>
            <div className='third-segment'>
              <div className='first-row-wrapper'>
                <h4>Personal Infomation</h4>
                <div className='first-row-wrapper1'>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                </div>
                <div className='first-row-wrapper2'>
                 <h4>Education and Employment</h4>
                 <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                  <div>
                    <p>Fullname</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className='second-row-wrapper'>
                <h4>Socials</h4>
                <div>
                  <p>Twitter</p>
                  <p></p>
                </div>
                <div>
                  <p>Facebook</p>
                  <p></p>
                </div>
                <div>
                  <p>instagram</p>
                  <p></p>
                </div>
              </div>
              <div className='third-row-wrapper'>
                <h4>Guarantor</h4>
                <div>
                  <p>Fullname</p>
                  <p></p>
                </div>
                <div>
                  <p>Phone number</p>
                  <p></p>
                </div>
                <div>
                  <p>Email Address</p>
                  <p></p>
                </div>
                <div>
                  <p>Relationship</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
