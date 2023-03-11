import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import "../../styles/Home.css";

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className='home-component'>Component</div> 
    </div>
  )
}

export default Home