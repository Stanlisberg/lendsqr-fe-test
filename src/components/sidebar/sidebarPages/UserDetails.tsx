import React from 'react'
import{ useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import LendsqrContext from '../../context/LendsqrContext'

function UserDetails() {
  const { getUserDetails, userDetails} = useContext(LendsqrContext);
 const { details }  = useParams();

 useEffect(() => {
  getUserDetails(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${details}`)
 }, [])

 console.log(userDetails);

  return (
    <div>
      UserDetails
    </div>
  )
}

export default UserDetails