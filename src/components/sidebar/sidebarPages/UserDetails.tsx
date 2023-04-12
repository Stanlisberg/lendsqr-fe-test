import React from "react";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../Sidebar";
import LendsqrContext from "../../context/LendsqrContext";
import { ReactComponent as LessThan } from "../../../assets/userDetailsSvg/lessthan.svg";
import { ReactComponent as FirstStar } from "../../../assets/userDetailsSvg/firstStar.svg";
import { ReactComponent as SecondStar } from "../../../assets/userDetailsSvg/secondStar.svg";
import { ReactComponent as Naira } from "../../../assets/userDetailsSvg/naira.svg";
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
                  <div className="first-div ">
                    <img 
                      src={userDetails?.profile?.avatar}
                      alt="image"
                      className='image'
                     />
                  </div>
                  <div className="second-div  pad">
                    <p className='full-name'>{userDetails?.profile.firstName} {userDetails?.profile.lastName}</p>
                    <p className='account-num'>Liu7687yuh9</p>
                  </div>
                  <div className="third-div  pad">
                    <p className='user-tier'>User Tier</p>
                    <div className='star'><FirstStar /><SecondStar /><SecondStar /></div>
                  </div>
                  <div className="fourth-div  pad">
                    <div className='account-bal'>#{userDetails?.accountBalance}</div>
                    <p className='bvn'>{userDetails?.profile.bvn} / Providus Bank</p>
                  </div>
                </div>
                <div className="second-row-wrapper">
                  <div className='child'>General Details</div>
                  <div className='child'>Documents</div>
                  <div className='child'>Bank Details</div>
                  <div className='child'>Loans</div>
                  <div className='child'>Savings</div>
                  <div className='child'>App and System</div>
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
