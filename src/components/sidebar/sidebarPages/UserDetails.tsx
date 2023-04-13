import React, { CSSProperties } from "react";
import { useEffect, useContext, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import LendsqrContext from "../../context/LendsqrContext";
import { ReactComponent as LessThan } from "../../../assets/userDetailsSvg/lessthan.svg";
import { ReactComponent as FirstStar } from "../../../assets/userDetailsSvg/firstStar.svg";
import { ReactComponent as SecondStar } from "../../../assets/userDetailsSvg/secondStar.svg";
import { ReactComponent as Naira } from "../../../assets/userDetailsSvg/naira.svg";
import "../../../styles/UserDetails.css";

function UserDetails() {
  const [over, setOver] = useState<boolean>(true);
  const { getUserDetails, userDetails } = useContext(LendsqrContext);
  const { details } = useParams();

  const navigate = useNavigate();
  const redirect = () => {
    navigate('/user')
  }

  useEffect(() => {
    getUserDetails(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${details}`
    );
  }, []);

  console.log(userDetails);

  const Input: CSSProperties = {
    fontWeight: "bold",
    marginLeft: "2px",
    fontSize: "60px",
  };

  return (
    <div className="user">
      <Navbar />
      <div className="user-wrapper">
        <Sidebar />
        <div className="user-component">
          <div className="details-component">
            <div className="first-segment">
              <div 
                className="first-row" 
                // onClick={() => redirect()}
                >
                  <LessThan
                    className="less-than"
                    onClick={() => redirect()}
                    onMouseOver={() => setOver(true)}
                    onMouseLeave={() => setOver(false)}
                  />
                <p className="back-text">Back to Users</p>
              </div>
              <div className="second-row">
                <p className="user-details-text">User Details</p>
                <div className="black-active-div">
                  <div className="blacklist">Blacklist user</div>
                  <div className="activate-user">Activate user</div>
                </div>
              </div>
            </div>
            <div className="second-segment">
              <div className="first-row-wrapper">
                <div className="first-div ">
                  <img
                    src={userDetails?.profile?.avatar}
                    alt="image"
                    className="image"
                  />
                </div>
                <div className="second-div  pad">
                  <p className="full-name">
                    {userDetails?.profile.firstName}{" "}
                    {userDetails?.profile.lastName}
                  </p>
                  <p className="account-num">Liu7687yuh9</p>
                </div>
                <div className="third-div  pad">
                  <p className="user-tier">User Tier</p>
                  <div className="star">
                    <FirstStar />
                    <SecondStar />
                    <SecondStar />
                  </div>
                </div>
                <div className="fourth-div  pad">
                  <div className="account-bal">
                    #{userDetails?.accountBalance}
                  </div>
                  <p className="bvn">
                    {userDetails?.profile.bvn} / Providus Bank
                  </p>
                </div>
              </div>
              <div className="second-row-wrapper">
                <div className="child">General Details</div>
                <div className="child">Documents</div>
                <div className="child">Bank Details</div>
                <div className="child">Loans</div>
                <div className="child">Savings</div>
                <div className="child">App and System</div>
              </div>
            </div>
            <div className="third-segment">
              <div className="row">
                <h4 className="heading">Personal Infomation</h4>
                <div className="wrap-container">
                  <div className="first-wrap">
                    <p className="p-head">Fullname</p>
                    <p className="p-child">
                      {userDetails?.profile.firstName}{" "}
                      {userDetails?.profile.lastName}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Phone Number</p>
                    <p className="p-child">
                      {userDetails?.phoneNumber.slice(2, 12)}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Email Address</p>
                    <p className="p-child">{userDetails?.email}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Bvn</p>
                    <p className="p-child">{userDetails?.profile.bvn}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Gender</p>
                    <p className="p-child">{userDetails?.profile.gender}</p>
                  </div>
                </div>
                  <div className="wrap-container under">
                    <div className="first-wrap">
                      <p className="p-head">Marital Status</p>
                      <p className="p-child">Single</p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Children</p>
                      <p className="p-child">None</p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Type of Residence</p>
                      <p className="p-child">{userDetails?.profile.address}</p>
                    </div>
                  </div>
                
              </div>
              <div className="row">
                <h4 className="heading">Education and Employment</h4>
                <div className="wrap-container">
                  <div className="first-wrap">
                    <p className="p-head">Level Of Education</p>
                    <p className="p-child">{userDetails?.education.level}</p>
                  </div>
                  <div className="div-wrap">
                    <div className="p-head">
                      Employment <span>Status</span>
                    </div>
                    <p className="p-child">
                      {userDetails?.education.employmentStatus}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Sector of employment</p>
                    <p className="p-child">{userDetails?.education.sector}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Duration of Employment</p>
                    <p className="p-child">{userDetails?.education.duration}</p>
                  </div>
                </div>
                <div className="wrap-container under">
                  <div className="first-wrap">
                    <p className="p-head">Office email</p>
                    <p className="p-child">
                      {userDetails?.education.officeEmail}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <div className="p-head">Monthly Income</div>
                    <p className="p-child">
                      #{userDetails?.education.monthlyIncome[0]} - #
                      {userDetails?.education.monthlyIncome[1]}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Loan repayment</p>
                    <p className="p-child">
                      {userDetails?.education.loanRepayment}
                    </p>
                  </div>
                </div>
              </div>
                <div className="row">
                  <h4 className="heading">Socials</h4>
                  <div className="wrap-container under">
                    <div className="first-wrap">
                      <p className="p-head">Twitter</p>
                      <p className="p-child">{userDetails?.socials.twitter}</p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Facebook</p>
                      <p className="p-child">{userDetails?.socials.facebook}</p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Instagram</p>
                      <p className="p-child">
                        {userDetails?.socials.instagram}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h4 className="heading">Guarantor</h4>
                  <div className="wrap-container">
                    <div className="first-wrap">
                      <p className="p-head">Full name</p>
                      <p className="p-child">
                        {userDetails?.guarantor.firstName}{" "}
                        {userDetails?.guarantor.lastName}
                      </p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Phone Number</p>
                      <p className="p-child">
                        {userDetails?.guarantor.phoneNumber.slice(0, 15)}
                      </p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Email Address</p>
                      <p className="p-child">
                        {userDetails?.education.officeEmail}
                      </p>
                    </div>
                    <div className="div-wrap">
                      <p className="p-head">Relationship</p>
                      <p className="p-child">Sister</p>
                    </div>
                  </div>
                </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;




{/* <div className="wrap-container">
                  <div className='div-wrap'>
                    <p className='p-head'>Marital Status</p>
                    <p className='p-child'>{userDetails?.phoneNumber.slice(0, 15)}</p>
                  </div>
                  <div className='div-wrap'>
                    <p className='p-head'>Children</p>
                    <p className='p-child'>{userDetails?.email}</p>
                  </div>
                  <div className='div-wrap'>
                    <p className='p-head'>Residence</p>
                    <p className='p-child'>{userDetails?.profile.bvn}</p>
                  </div>
                </div> */}