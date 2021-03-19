import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    return (
       <>
        <main className="container">
        <h2 className="title"> <Link style={{color:"#47DDCB" , textDecoration:"none"}} to={'/userlogin'}>User Login</Link> <br></br></h2>
        <h2 className="title"><Link style={{color:"#47DDCB" , textDecoration:"none"}} to={'/adminlogin'}>Admin Login</Link></h2>
        
        </main>
       
       </> 
    )
}

export default Home
