import React, { useState,useEffect } from 'react'
import DatePicker from 'react-date-picker'
import TimePicker from 'react-time-picker'
import { v4 as uuidv4 } from 'uuid';
import DashboardSteps from './DashboardSteps'
import '../styles/newBooking.css'
import { Link, useHistory } from 'react-router-dom'
import {booking,listMyBookings} from '../action/bookingAction'
import { useDispatch ,useSelector} from 'react-redux';

const NewBooking = () => {
    const dispatch=useDispatch()
    const history=useHistory()
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00')
    
    
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

     const myBookings=useSelector((state)=>state.myBookings)
     const { bookloading, bookerror, bookingList } = myBookings

     console.log(bookingList.length)

    
    const bookingId=uuidv4()
    
    const clickHandler=()=>{

        if((date.getDay()=== 0 ) || (date.getDay()=== 6 )){
            alert('Office is closed on saturday and sunday')
        } else if((time ==='10:00') || (time ==='11:00') || (time ==='17:00') || (time ==='18:00')){
            
            alert('Click on Book button to book ur appointment')
        }else{
            alert('Please Select timing of 10.00 AM,11.00 AM,05.00 PM or 06.00 PM')
        }

    }
    


    const bookHandler=()=>{
        if(userInfo && bookingList.length===0){
            dispatch(booking(bookingId,date,time))
            dispatch(listMyBookings())
            history.push('/mybooking')
            
        }
        if(bookingList.length > 0){
            alert('You have already booked your appointment')
            
            history.push('/mybooking')
        }

        
    }

    
    
    return (
        < >
            <DashboardSteps step1 step2 step3 />
            <main className='container'>
                <h1>Select Date:</h1><DatePicker className='date'
                    onChange={setDate}
                    value={date}
                /><br></br>
                <h1>Select Time:</h1><TimePicker className='time'
                                                onChange={setTime}
                                                value={time}
              /> 
                <br></br>
                <button className='btn1' onClick={clickHandler}>Check Avilability</button><br></br>
                <button className='btn2' onClick={bookHandler}>Book</button>
            </main>

        </>
    )
}

export default NewBooking
