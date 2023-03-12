import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Navbar from '../navbar/Navbar';
import "../../styles/Home.css";

function Home() {
  return (
    <div className='home'>
         <Navbar />
        <div className='home-wrapper'>
            <Sidebar />
            <div className='home-component'>
                Component
            </div>
        </div> 
    </div>
  )
}

export default Home