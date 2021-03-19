import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/dashboardSteps.css'

import {logout} from '../action/userActions'
import {adminlogout} from '../action/adminActions'
import {listMyBookings} from '../action/bookingAction'
import {useDispatch} from 'react-redux'

const DashboardSteps = ({step1,step2,step3,step4}) => {
    const dispatch=useDispatch()
    const history=useHistory()
    const step1Handler=()=>{
        history.push('/dashboard')
    }
    const step2Handler=()=>{
        history.push('/newbooking')
    }
    const step3Handler=()=>{
        
        history.push('/mybooking')
        
    }
    const logoutHandler=()=>{
        dispatch(logout())
        dispatch(adminlogout())
        history.push('/')
    }
    return (
        <nav >
            {step1 ?(
                <button onClick={step1Handler} className='button' >Dashboard</button>
            ):<button  disabled  className='button-disabled' >Dashboard</button>}
            {step2 ?(
                <button onClick={step2Handler} className='button'>New Booking</button>
            ):<button disabled className='button-disabled'>New Booking</button>}
            {step3 ?(
                <button onClick={step3Handler} className='button'>My Booking</button>
            ):<button   className='button-disabled' disabled>My Booking</button>}
            {step4 ?(
                <button className='logout' onClick={logoutHandler}>Logout</button>
            ):<button  disabled className='logout'>Logout</button>}
        </nav>
        
    )
}

export default DashboardSteps
