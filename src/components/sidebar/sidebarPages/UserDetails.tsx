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
  const { getUserDetails, userDetails } = useContext(LendsqrContext);
  const { details } = useParams();
  // console.log(userDetails);

  const navigate = useNavigate();
  const redirect = () => {
    navigate("/user");
  };

  //-----------Testing typescript destruturing
    // let point: [number, number] = [1, 2];
    // let [x, y] = point;
    // console.log(x, y);
    
  //---------useState for  testing the click button
  const [over, setOver] = useState<boolean>(true);

  //----------useState for IndexDb
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [avatar, setAvatar] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [bvn, setBvn] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [educationLevel, setEducationLevel] = useState();
  const [employmentStatus, setEmploymentStatus] = useState();
  const [educationSector, setEducationSector] = useState();
  const [educationDuration, setEducationDuration] = useState();
  const [educationEmail, setEducationEmail] = useState();
  const [monthlyLow, setMonthlyLow] = useState();
  const [monthlyHigh, setMonthlyHigh] = useState();
  const [loanRepayment, setLoanRepayment] = useState();
  const [twitter, setTwitter] = useState();
  const [facebook, setFacebook] = useState();
  const [instagram, setInstagram] = useState();
  const [guarantorFirstName, setGuarantorFirstName] = useState();
  const [guarantorLastName, setGuarantorLastName] = useState();
  const [guarantorPhoneNumber, setGuarantorPhoneNumber] = useState();

  useEffect(() => {
    getUserDetails(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${details}`
    );
  }, []);

  //--------Implementing indexDb  Database.
  useEffect(() => {
    const indexedDB = window.indexedDB;

    //------Checking if indexDb is compatible with your browser.
    if (indexedDB) {
      // console.log(indexedDB);
    }
    const request = indexedDB.open("UserDetails-Database", 1);

    request.onerror = (event) => {
      // console.log(event)
    };

    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.createObjectStore("UserDetails", { keyPath: "id" });
    };

    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("UserDetails", "readwrite");
      const store = transaction.objectStore("UserDetails");

      store.put({ id: 1, userFirstName: `${userDetails?.profile.firstName}` });
      store.put({ id: 2, userLastName: `${userDetails?.profile.lastName}` });
      store.put({ id: 3, avatar: `${userDetails?.profile.avatar}` });
      store.put({ id: 4, accountBalance: `${userDetails?.accountBalance}` });
      store.put({ id: 5, bvn: `${userDetails?.profile.bvn}` });
      store.put({ id: 6, phoneNumber: `${userDetails?.phoneNumber.slice(0, 15)}`});
      store.put({ id: 7, email: `${userDetails?.email}` });
      store.put({ id: 8, gender: `${userDetails?.profile.gender}` });
      store.put({ id: 9, address: `${userDetails?.profile.address}` });
      store.put({ id: 10, educationLevel: `${userDetails?.education.level}` });
      store.put({ id: 11, employmentStatus: `${userDetails?.education.employmentStatus}`});
      store.put({ id: 12, educationSector: `${userDetails?.education.sector}`});
      store.put({ id: 13, educationDuration: `${userDetails?.education.duration}`});
      store.put({ id: 14, educationEmail: `${userDetails?.education.officeEmail}`});
      store.put({ id: 15, monthlyLow: `${userDetails?.education.monthlyIncome[0]}`});
      store.put({ id: 16, monthlyHigh: `${userDetails?.education.monthlyIncome[1]}`,});
      store.put({ id: 17, loanRepayment: `${userDetails?.education.loanRepayment}`});
      store.put({ id: 18, twitter: `${userDetails?.socials.twitter}` });
      store.put({ id: 19, facebook: `${userDetails?.socials.facebook}` });
      store.put({ id: 20, instagram: `${userDetails?.socials.instagram}` });
      store.put({ id: 21, guarantorFirstName: `${userDetails?.guarantor.firstName}`});
      store.put({ id: 22, guarantorLastName: `${userDetails?.guarantor.lastName}` });
      store.put({ id: 23, guarantorPhoneNumber: `${userDetails?.guarantor.phoneNumber.slice(0, 11)}`,});
      store.put({ id: 24, accountNumber: `${userDetails?.accountNumber}` });

      const firstName = store.get(1);
      firstName.onsuccess = () => {
        setFirstName(firstName.result.userFirstName);
      };

      const lastName = store.get(2);
      lastName.onsuccess = function () {
        setLastName(lastName.result.userLastName);
      };

      const avatar = store.get(3);
      avatar.onsuccess = function () {
        setAvatar(avatar.result.avatar);
      };

      const accountBalance = store.get(4);
      accountBalance.onsuccess = function () {
        setAccountBalance(accountBalance.result.accountBalance);
      };

      const bvn = store.get(5);
      bvn.onsuccess = function () {
        setBvn(bvn.result.bvn);
      };

      const phoneNumber = store.get(6);
      phoneNumber.onsuccess = function () {
        setPhoneNumber(phoneNumber.result.phoneNumber);
      };

      const email = store.get(7);
      email.onsuccess = function () {
        setEmail(email.result.email);
      };

      const gender = store.get(8);
      gender.onsuccess = function () {
        setGender(gender.result.gender);
      };

      const address = store.get(9);
      address.onsuccess = function () {
        setAddress(address.result.address);
      };

      const educationLevel = store.get(10);
      educationLevel.onsuccess = function () {
        setEducationLevel(educationLevel.result.educationLevel);
      };

      const employmentStatus = store.get(11);
      employmentStatus.onsuccess = function () {
        setEmploymentStatus(employmentStatus.result.employmentStatus);
      };

      const educationSector = store.get(12);
      educationSector.onsuccess = function () {
        setEducationSector(educationSector.result.educationSector);
      };

      const educationDuration = store.get(13);
      educationDuration.onsuccess = function () {
        setEducationDuration(educationDuration.result.educationDuration);
      };

      const educationEmail = store.get(14);
      educationEmail.onsuccess = function () {
        setEducationEmail(educationEmail.result.educationEmail);
      };

      const monthlyLow = store.get(15);
      monthlyLow.onsuccess = function () {
        setMonthlyLow(monthlyLow.result.monthlyLow);
      };

      const monthlyHigh = store.get(16);
      monthlyHigh.onsuccess = function () {
        setMonthlyHigh(monthlyHigh.result.monthlyHigh);
      };

      const loanRepayment = store.get(17);
      loanRepayment.onsuccess = function () {
        setLoanRepayment(loanRepayment.result.loanRepayment);
      };

      const twitter = store.get(18);
      twitter.onsuccess = function () {
        setTwitter(twitter.result.twitter);
      };

      const facebook = store.get(19);
      facebook.onsuccess = function () {
        setFacebook(facebook.result.facebook);
      };

      const instagram = store.get(20);
      instagram.onsuccess = function () {
        setInstagram(instagram.result.instagram);
      };

      const guarantorFirstName = store.get(21);
      guarantorFirstName.onsuccess = function () {
        setGuarantorFirstName(guarantorFirstName.result.guarantorFirstName);
      };

      const guarantorLastName = store.get(22);
      guarantorLastName.onsuccess = function () {
        setGuarantorLastName(guarantorLastName.result.guarantorLastName);
      };

      const guarantorPhoneNumber = store.get(23);
      guarantorPhoneNumber.onsuccess = function () {
        setGuarantorPhoneNumber(guarantorPhoneNumber.result.guarantorPhoneNumber);
      };

      const accountNumber = store.get(24);
      accountNumber.onsuccess = function () {
        setAccountNumber(accountNumber.result.accountNumber);
      };
    };
  });

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
                  <img src={avatar} alt="image" className="image" />
                </div>
                <div className="second-div  pad">
                  <p className="full-name">
                    {firstName} {lastName}
                  </p>
                  <p className="account-num">{accountNumber}</p>
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
                  <div className="account-bal">#{accountBalance}</div>
                  <p className="bvn">{bvn} / Providus Bank</p>
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
                      {firstName} {lastName}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Phone Number</p>
                    <p className="p-child">{phoneNumber}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Email Address</p>
                    <p className="p-child">{email}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Bvn</p>
                    <p className="p-child">{bvn}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Gender</p>
                    <p className="p-child">{gender}</p>
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
                    <p className="p-child">{address}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="heading">Education and Employment</h4>
                <div className="wrap-container">
                  <div className="first-wrap">
                    <p className="p-head">Level Of Education</p>
                    <p className="p-child">{educationLevel}</p>
                  </div>
                  <div className="div-wrap">
                    <div className="p-head">
                      Employment <span>Status</span>
                    </div>
                    <p className="p-child">{employmentStatus}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Sector of employment</p>
                    <p className="p-child">{educationSector}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Duration of Employment</p>
                    <p className="p-child">{educationDuration}</p>
                  </div>
                </div>
                <div className="wrap-container under">
                  <div className="first-wrap">
                    <p className="p-head">Office email</p>
                    <p className="p-child">{educationEmail}</p>
                  </div>
                  <div className="div-wrap">
                    <div className="p-head">Monthly Income</div>
                    <p className="p-child">
                      #{monthlyLow} - #{monthlyHigh}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Loan repayment</p>
                    <p className="p-child">{loanRepayment}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="heading">Socials</h4>
                <div className="wrap-container under">
                  <div className="first-wrap">
                    <p className="p-head">Twitter</p>
                    <p className="p-child">{twitter}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Facebook</p>
                    <p className="p-child">{facebook}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Instagram</p>
                    <p className="p-child">{instagram}</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <h4 className="heading">Guarantor</h4>
                <div className="wrap-container">
                  <div className="first-wrap">
                    <p className="p-head">Full name</p>
                    <p className="p-child">
                      {guarantorFirstName} {guarantorLastName}
                    </p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Phone Number</p>
                    <p className="p-child">{guarantorPhoneNumber}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Email Address</p>
                    <p className="p-child">{educationEmail}</p>
                  </div>
                  <div className="div-wrap">
                    <p className="p-head">Relationship</p>
                    <p className="p-child">Sister</p>
                  </div>
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
