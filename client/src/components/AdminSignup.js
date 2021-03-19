import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from '../action/adminActions'
import {listUsersBookings} from '../action/bookingAction'

const AdminSignup = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [authKey, setAuthKey] = useState('')

    const history=useHistory()
    const dispatch=useDispatch()

    const adminSignup = useSelector((state) => state.adminSignup)
    const { loading, error, adminInfo } = adminSignup

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(signup(email,password,authKey))
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
            <h1>Admin Sign Up</h1>
            
            <input type="email"  
                   placeholder="Email" 
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}>
                   </input><br></br>
            <input type="password"  
                   placeholder="Password"
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}></input>
            <input type="password"  
                   placeholder="Auth Key"
                   value={authKey}
                   onChange={(e)=>setAuthKey(e.target.value)}></input>
                   {error && <h3 style={{padding:'5px',margin:"10px",backgroundColor:"#f44336",color:'white'}}>{error}</h3>}
            <button type="submit">Sign Up</button>
            
        </form>
            <h3>have an admin account ?<Link  to={"/adminlogin"} style={{ textDecoration: 'none' }}> <span>Sign In</span></Link> </h3>
            <h3>Go to <Link to={"/usersignup"} style={{ textDecoration: 'none' }}><span>User Sign Up</span></Link> </h3>
    </div>
    )
}

export default AdminSignup
