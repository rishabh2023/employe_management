import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './style/navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('isloggedIn')
        localStorage.removeItem('isadmin')
        localStorage.removeItem('status')
        navigate('/login')
    }

  return (
 
      <nav className="navbar">
      {localStorage.getItem("isloggedIn")?
      <>
      <div className="container">
        <div className="logo">
            Welcome 
        </div>
        
     
      </div>
      <button 
      onClick={onLogout}
        style={{
            backgroundColor:"red",
            color:"white",
            padding:"10px",
            borderRadius:"5px",
            border:"0",
            cursor:"pointer",
            float:"right",
            position:"relative"
            
            // marginLeft:"80%",
           
        
        }}>
            logout
        </button>  
        </>
      :
      <button 
      onClick={()=>{
        navigate('/login')
      }}
     
        style={{
            backgroundColor:"red",
            color:"white",
            padding:"10px",
            borderRadius:"5px",
            border:"0",
            cursor:"pointer",
            float:"right",
            position:"relative"
            
            // marginLeft:"80%",
           
        
        }}>
            login
        </button>
}
    </nav>
  
    
  )
}

export default Navbar