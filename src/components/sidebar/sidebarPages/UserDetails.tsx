import React, { CSSProperties } from "react";
import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import LendsqrContext from "../../context/LendsqrContext";
import { ReactComponent as LessThan } from "../../../assets/userDetailsSvg/lessthan.svg";
import { ReactComponent as FirstStar } from "../../../assets/userDetailsSvg/firstStar.svg";
import { ReactComponent as SecondStar } from "../../../assets/userDetailsSvg/secondStar.svg";
// import { ReactComponent as Naira } from "../../../assets/userDetailsSvg/naira.svg";
import "../../../styles/UserDetails.css";

function UserDetails() {
  const [over, setOver] = useState<boolean>(true);
  const { getUserDetails, userDetails } = useContext(LendsqrContext);
  const { details } = useParams();

  useEffect(() => {
    getUserDetails(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${details}`
    );
  }, []);

  console.log(userDetails);

  const Input: CSSProperties = {
    fontWeight: "bold",
    marginLeft: "2px",
    fontSize: "60px"
  };

  return (
    <div className="user">
      <Navbar />
      <div className="user-wrapper">
        <Sidebar />
        <div className="user-component">
          <div className="details-component">
            <div className="first-segment">
              <div className="first-row">
                <LessThan
                  className="less-than"
                  onMouseOver={() => setOver(true)}
                  onMouseLeave={() => setOver(false)}
                  // style={over? {color: 'red'}: ''}
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
                <div className='wrap-container'>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                </div>
              </div>
              <div className="row">
                <h4 className="heading">Education and Employment</h4>
                <div className='wrap-container'>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                  <p>Fullname</p>
                  <p></p>
                </div>
              <div className="row">
                <h4 className="heading">Socials</h4>
                <div className='wrap-container'>
                  <p>Twitter</p>
                  <p></p>
                  <p>Facebook</p>
                  <p></p>
                  <p>instagram</p>
                  <p></p>
                </div>
              </div>
              <div className="row">
                <h4 className="heading">Guarantor</h4>
                  <p>Fullname</p>
                  <p></p>
                  <p>Phone number</p>
                  <p></p>
                  <p>Email Address</p>
                  <p></p>
                  <p>Relationship</p>
                  <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
