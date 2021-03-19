import React from 'react'
import DashboardSteps from './DashboardSteps'
import {useSelector,useDispatch} from 'react-redux'
import { bookingListMyReducer } from '../reducers/bookingReducers'
import {listUsersBookings} from '../action/bookingAction'

import '../styles/adminTable.css' 

const AdminDashboard = () => {
    const dispatch=useDispatch()
    
    
    const userLogin = useSelector((state) => state.userLogin)
    const { userloading, usererror, userInfo } = userLogin
    
    const usersBookings = useSelector((state) => state.usersBookings)
    const { loading, error, usersBookingList } = usersBookings
    
    console.log(usersBookingList)

    return (
        <div>
            <DashboardSteps step1 step4 />

            <h2>Users Bookings</h2>

            <table  className="css-serial">
                <thead>
                    <tr>
                        <th>Sl no</th>
                        <th>Booking ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
         {usersBookingList && usersBookingList.map((book)=>(
             <tr key={book._id}>
                 <td></td>
                 <td>{book.bookingId}</td>
                 <td>{book.name}</td>
                 <td>{book.email}</td>
                 <td>{book.date.substring(0,10)}</td>
                 <td>{book.time}</td>
             
             </tr>
             
         ))}  
         
       
     </tbody>








            </table>
        </div>
    )
}

export default AdminDashboard
