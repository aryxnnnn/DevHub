import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios' ;
import { useDispatch } from "react-redux"; 
import {UserActions} from '../store/userSlice'
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../utils/constants';

function Signup() {
  
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error , SetError] = useState("")


  const dispatch = useDispatch() ; 
  const navigate = useNavigate() ; 

  const handleSignup = async()=>{
    try {
      const res = await axios.post( BaseUrl + "/signup" , {
        firstName , 
        lastName ,
        emailID : emailId , 
        password
      } , {withCredentials : true })


      const userData = res.data.saveduser

      dispatch(UserActions.login(userData))

      navigate("/") ; 

    } catch (error) {
      SetError(error.response.data) ; 
    }
  }

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="card card-border bg-base-300 w-130  mb-20">
        <div className="card-body">
          <div className='flex flex-col items-center'>
              <h2 className="card-title text-3xl font-medium mb-1">Sign up to your new Account</h2>
              <p>Already have a account ? 
                <Link to="/login" className='underline'>Login</Link>
              </p>
          </div>

          <fieldset className="fieldset w-90 mx-auto">
            <legend className="fieldset-legend text-xl font-light">Firstname</legend>
            <input type="text" className="input"  value={firstName}
              placeholder="Enter your Firstname" 
              onChange={(e)=>setfirstName(e.target.value)}/>
          </fieldset>
          <fieldset className="fieldset  w-90 mx-auto">
            <legend className="fieldset-legend text-xl font-light ">Lastname</legend>
            <input type="text" className="input" value={lastName}
                placeholder="Enter your Lastname" 
                onChange={(e)=>setlastName(e.target.value)}/>
          </fieldset>

          <fieldset className="fieldset w-90 mx-auto">
            <legend className="fieldset-legend text-xl font-light">Email</legend>
            <input type="email" className="input"  value={emailId}
              placeholder="Enter your Email" 
              onChange={(e)=>setEmail(e.target.value)}/>
          </fieldset>
          <fieldset className="fieldset mb-3 w-90 mx-auto">
            <legend className="fieldset-legend text-xl font-light ">Password</legend>
            <input type="password" className="input" value={password}
                placeholder="Enter your Password" 
                onChange={(e)=>setPassword(e.target.value)}/>
          </fieldset>

          {Error != "" &&
            <p className='text-red-600 text-lg text-center '>{Error + " !!"}</p>
          }

          <div className="card-actions justify-center ">
            <button className="btn btn-primary w-60 mb-5 text-lg" onClick={handleSignup}>Signup</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup