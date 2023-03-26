import React from 'react'
import '../styles/Widget.css'
import {ReactComponent as User} from '../assets/widgetSvg/users.svg'
import {ReactComponent as ActiveUser} from '../assets/widgetSvg/activeUsers.svg'
import {ReactComponent as UsersWithLoans} from '../assets/widgetSvg/usersWithLoans.svg'
import {ReactComponent as UsersWithSavings} from '../assets/widgetSvg/usersWithSavings.svg'

// type widgetProp = {
//   data : {
//     svg: string
//     title: string
//     amount: boolean
//   }
// }
function Widget( item: any) {
  let data;

  switch(item) {
    // case  'user':
    //   data = {
    //     svg: <User />,
    //     title: 'Users',
    //     amount: 2,453
    //   }
    //   break;
    //   default:
    //   break;
      // case  'activeUsers':
      // data = {
      //   svg: <User />,
      //   title: 'Users',
      //   amount: 2,453
      // };
      // break;
  }

  return (
    <>
      <div className='widget'>
        <div>left</div>
        <div>right</div>
        <div>right</div>
      </div>
    </>
  )
}

export default Widget