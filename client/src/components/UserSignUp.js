import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {signup} from '../action/userActions'
import {listMyBookings} from '../action/bookingAction'

const UserSignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history=useHistory()
    const dispatch=useDispatch()

    const userSignup = useSelector((state) => state.userSignup)
    const { loading, error, userInfo } = userSignup
    
    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(signup(name,email,password))
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
            <h1>Sign Up</h1>
            <input type="name"  
            placeholder="Name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}>
            </input><br></br>
            
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
            <button type="submit">Sign Up</button>
            
        </form>
            <h3>have a user account ?<Link  to={"/userlogin"} style={{ textDecoration: 'none' }}> <span>Sign In</span></Link> </h3>
            <h3>Go to <Link to={"/adminsignup"} style={{ textDecoration: 'none' }}><span>Admin Sign Up</span></Link> </h3>
    </div>
    )
}

export default UserSignUp
