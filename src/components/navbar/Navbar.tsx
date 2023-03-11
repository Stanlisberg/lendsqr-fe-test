import React from 'react'
import { BiSearch} from 'react-icons/bi'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-container'>
        <div className='input-div'>
         <input type='text' placeholder='Search for anything' />

        </div>


      </div>
    </div>
  )
}

export default Navbar