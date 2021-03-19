import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../styles/userLogin.css'
import {Link} from 'react-router-dom'
import {login} from '../action/userActions'
import {listMyBookings} from '../action/bookingAction'

const UserLogin = ({history,location}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch=useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(login(email,password))  
    }

    useEffect(()=>{
      if(userInfo){
        history.push('/dashboard')
        dispatch(listMyBookings())
      }
    },[dispatch,userInfo,history])

    
    return (
        <div className="container">
        
            <form className="form" onSubmit={submitHandler}>
                <h1>Sign In</h1>
                
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

            
              <h3>Dont Have User a user account ?:<Link to='/usersignup'><span>Sign Up</span></Link></h3>
                <h3>Go to <Link to={"/adminlogin"} style={{ textDecoration: 'none' }}><span>Admin Sign In</span></Link> </h3>
        </div>


    )
}

export default UserLogin
