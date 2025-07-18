import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { Button } from 'bootstrap';
const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrentState] = useState("Login");
  return (
    <div className='login-popup'>
        <form  className="login-popup-container">
            <div className="login-popup-title">
            <h2>{currState}</h2>
            <img  onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login" ?<></>:<input type="text" placeholder='Your name'  required/>}
                <input type="email" placeholder='Your email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up" ?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing,I agree to the terms of use & privacy policy.</p>
            </div>
            {currState==="Login" 
            ?<p onClick={()=>setCurrentState("Sign Up")}>Create a new account? <span>Click here</span></p>
            :<p onClick={()=>setCurrentState("Login")}>Already have an account? <span>Login here</span></p>
        }
           
        </form>
    </div>
  )
}

export default LoginPopup