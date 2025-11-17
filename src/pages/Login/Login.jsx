import React, { useState } from 'react'
import './Login.css'
import assets from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [currState, setCurrState] = useState('Sign Up')
  const navigate = useNavigate()

  return (
    <div className='login' >
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={()=>navigate('/chat')} className="login-form">
        <h2>{currState}</h2>
        {currState==='Sign Up'?<input type="text" placeholder='username' required className="form-input" />:null}
        <input type="email" placeholder='Email address' required className="form-input" />
        <input type="password" placeholder='password' required className="form-input" />
        <button type='submit' >{currState==='Sign Up'?'Create account':'Login now'}</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState==='Sign Up'?
          <p className="login-toggle">
            Alredy have an account <span onClick={()=>setCurrState('Login')} >click here</span>
          </p>:
          <p className="login-toggle">
            Create an account <span onClick={()=>setCurrState('Sign Up')} >click here</span>
          </p>}
        </div>
      </form>
    </div>
  )
}

export default Login
