import React from 'react'
import "../../styles/Sidebar.css";
import pablo from '../../icons/lendsqr.svg'
import {
   FaBriefcase,
   FaHome, 
   FaUserFriends, 
   FaUsers, 
   FaHandshake, 
   FaPiggyBank, 
   FaUserCheck, 
   FaUserTimes,
   FaHandHoldingUsd,
   FaCoins,
   FaSlidersH,
   FaUserCog } from  "react-icons/fa";
import { GiMoneyStack } from 'react-icons/gi'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineBarChart } from 'react-icons/ai'


function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-wrap'>
        <div className='sidebar-top'>
            <div>
              <FaBriefcase size='18' className='icon'/>
              <span>Switch Organization</span>
              <MdKeyboardArrowDown size='25' className='icon' />
            </div>
            <div className='dash'>
              <FaHome size='18' className='icon'/>
              <span>Dashboard</span>
            </div>
        </div>
        <div className='sidebar-center'>
          <div> 
            <p className='title'>Customers</p>
            <div>
              <FaUserFriends size='18' className='icon'/>
              <span>Users</span>
            </div>
            <div>
               <FaUsers size='18' className='icon'/>
              <span>Guarantor</span>
            </div>
            <div>
              < GiMoneyStack size='18' className='icon'/>
              <span>Loans</span>
               {/* <img className='logo' src={pablo}></img> */}
            </div>
            <div>
              <FaHandshake size='18' className='icon' />
              <span>Decision Model</span>
            </div>
            <div>
              <FaPiggyBank size='18' className='icon'/>
              <span>Savings</span>
            </div>
            <div>
              <FaHandHoldingUsd size='18' className='icon'/>
              <span>Loan Requests</span>
            </div>
            <div>
              <FaUserCheck size='18' className='icon'/>
              <span>WhiteList</span>
            </div>
            <div>
              <FaUserTimes size='18' className='icon'/>
              <span>Karma</span>
            </div>
            <p className='title'>Businesses</p>
            <div>
              <FaBriefcase size='18' className='icon'/>
              <span>Organization</span>
            </div>
            <div>
               <FaHandHoldingUsd size='18' className='icon'/>
              <span>Loan Products</span>
            </div>
            <div>
              < GiMoneyStack size='18' className='icon'/>
              <span>Saving Products</span>
            </div>
            <div>
              <FaCoins size='18' className='icon'/>
              <span>Fees and Charges</span>
            </div>
            <div>
              <FaPiggyBank size='18' className='icon'/>
              <span>Transactions</span>
            </div>
            <div>
              <FaBriefcase size='18' className='icon'/>
              <span>Service</span>
            </div>
            <div>
              <FaUserCog size='18' className='icon'/>
              <span>Service Account</span>
            </div>
            <div>
              <FaUserTimes size='18' className='icon'/>
              <span>Settlements</span>
            </div>
            <div>
              <AiOutlineBarChart size='18' className='icon'/>
              <span>Reports</span>
            </div>
            <p className='title'>Settings</p>
            <div>
              <FaSlidersH size='18' className='icon'/>
              <span>Preference</span>
            </div>
            <div>
               <FaUsers size='18' className='icon'/>
              <span>Fees and Pricing</span>
            </div>
            <div>
              < GiMoneyStack size='18' className='icon'/>
              <span>Audit Logs</span>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Sidebar