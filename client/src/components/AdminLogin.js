import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {login} from '../action/adminActions'
import {listUsersBookings} from '../action/bookingAction'

const AdminLogin = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch=useDispatch()


    const adminLogin = useSelector((state) => state.adminLogin)
    const { loading, error, adminInfo } = adminLogin

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))
        
    }

    useEffect(()=>{
        if(adminInfo){
            history.push('/admindashboard')
            dispatch(listUsersBookings())
            
        }
      },[dispatch,adminInfo,history])
    return (
        <div className="container">
            
        <form className="form" onSubmit={submitHandler}>
            <h1>Admin Sign In</h1>
            <input type="email"  
                   placeholder="Email" 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}>
                   </input><br></br>
            <input type="password"  
                   placeholder="Password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}></input>
                   {error && <h3 style={{padding:'5px',margin:"10px",backgroundColor:"#f44336",color:'white'}}>{error}</h3>}
            <button type="submit">Sign In</button>
            
        </form>
            <h3>Don't have a user account ?<Link  to={"/adminsignup"} style={{ textDecoration: 'none' }}><span>Sign Up Now</span></Link> </h3>
            <h3>Go to <Link to={"/userlogin"} style={{ textDecoration: 'none' }}><span>User Sign In</span></Link> </h3>
    </div>

    )
}

export default AdminLogin
