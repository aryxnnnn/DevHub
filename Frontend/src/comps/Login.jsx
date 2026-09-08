import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios' ;
import { useDispatch } from "react-redux"; 
import {UserActions} from '../store/userSlice'
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../utils/constants';

function Login() {

  const [email, setEmail] = useState("DemoLogin@gmail.com");
  const [password, setPassword] = useState("Login@123");
  const [Error , SetError] = useState("")

  const dispatch = useDispatch() ; 
  const navigate = useNavigate() ; 

  const handleLogin = async() =>{
    try {    
      const res = await axios.post(BaseUrl + "/login" , {
        emailID : email , 
        password
      } , {withCredentials : true}) 

      // console.log(res.data.user) ; 
      const userData = res.data.user ;

      if(userData){
        dispatch(UserActions.login(userData)) ;  
      }

      navigate("/") ; 
    
    } catch (error) {
      SetError(error.response.data) ; 
    }
  } ; 

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="card card-border bg-base-300 w-140 min-h-90 mb-20">
        <div className="card-body">
          <div className='flex flex-col items-center'>
              <h2 className="card-title text-3xl font-medium ">Sign in to your Account</h2>
              <p>Dont have a account ? 
                <Link to="/signup" className='underline'> Sign up</Link>
              </p>
          </div>

          <fieldset className="fieldset w-90 mx-auto">
            <legend className="fieldset-legend text-2xl font-light">Email</legend>
            <input type="email" className="input"  value={email}
              placeholder="Enter your Mail" 
              onChange={(e)=>setEmail(e.target.value)}/>
          </fieldset>
          <fieldset className="fieldset mb-3 w-90 mx-auto">
            <legend className="fieldset-legend text-2xl font-light ">Password</legend>
            <input type="password" className="input" value={password}
                placeholder="Enter your PAssword" 
                onChange={(e)=>setPassword(e.target.value)}/>
          </fieldset>
          {Error != "" &&
            <p className='text-red-600 text-lg text-center '>{Error + " !!"}</p>
          }
          <div className="card-actions justify-center ">
            <button className="btn btn-primary w-50 mb-5" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login