import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import DashboardSteps from './DashboardSteps'
import {listMyBookings} from '../action/bookingAction'

const DashboardHome = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    
    const dispatch=useDispatch()
    const history=useHistory()

    const clickHandler=()=>{
        history.push('/newbooking')
        
    }

    return (
        <div>
            <DashboardSteps step1 step3 step4/>
            <h1 style={{margin:'50px auto'}}>Welcome {userInfo.name} You can book your appoinment with us</h1>
            <br></br>
            <button onClick={clickHandler} style={{color:"#fff",backgroundColor:"#47DDCB",padding:"20px",margin:"30px auto",cursor:"pointer"}}>Continue</button>
        </div>
    )
}

export default DashboardHome
