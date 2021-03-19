import React, { useEffect } from 'react'
import DashboardSteps from './DashboardSteps'
import { useSelector, useDispatch } from 'react-redux'
import { booking, listMyBookings } from '../action/bookingAction'
import ReactTable from "react-table";

import '../styles/mybooking.css'
import { useHistory } from 'react-router-dom';

const MyBooking = () => {
    
    const dispatch = useDispatch()
    const history=useHistory()
    

    
    const myBookings=useSelector((state)=>state.myBookings)
    const { bookloading, bookerror, bookingList } = myBookings

    

    return (

        <div>
        <DashboardSteps step1 step2 step3 step4/> 
        <table >
        <thead>
        <tr>
        <th>Sl no</th>
        <th>Booking ID</th> 
        <th>Date</th>
        <th>time</th>
    </tr>
        </thead>
        
        <tbody>
         { bookingList.map((book)=>(
             <tr key={book._id}>
                 <td>1</td>
                 <td>{book.bookingId}</td>
                 <td>{book.date.substring(0,10)}</td>
                 <td>{book.time}</td>
             
             </tr>
         ))}  
         
       
         </tbody> 
        
        </table> 
         
   
        </div>
    )
}

export default MyBooking
