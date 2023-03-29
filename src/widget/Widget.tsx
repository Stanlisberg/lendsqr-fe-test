import React from 'react'
import '../styles/Widget.css'
import {ReactComponent as User} from '../assets/widgetSvg/users.svg'
import {ReactComponent as ActiveUser} from '../assets/widgetSvg/activeUsers.svg'
import {ReactComponent as UsersWithLoans} from '../assets/widgetSvg/usersWithLoans.svg'
import {ReactComponent as UsersWithSavings} from '../assets/widgetSvg/usersWithSavings.svg'


type widgetProp = {
  status: 'users' |'activeUsers' | 'usersWithLoans' | 'usersWithSavings'
  
}

const Widget = ( props: widgetProp) => {

  let data;
   if(props.status === 'users') {
        data = {
          svg : <User className='svg'/>,
          title: 'Users',
          amount: '2,453'
        }
      } else if (props.status === 'activeUsers') {
        data = {
          svg: <ActiveUser className='svg'/>,
          title: 'Active Users',
          amount: '2,453'
        }
      } else if (props.status === 'usersWithLoans') {
        data = {
          svg: <UsersWithLoans className='svg'/>,
          title: 'Users With Loans',
          amount: '12,453'
        }
      } else if (props.status === 'usersWithSavings') {
        data = {
          svg: <UsersWithSavings className='svg'/>,
          title: 'Users With Savings',
          amount: '102,453'
        }
      }

  
  return (
    <>
      <div className='widget'>
        <div className=''> {data?.svg}</div>
        <div className='title'>{data?.title}</div>
        <div className='amount'>{data?.amount}</div>
      </div>
    </>
  )
}

export default Widget