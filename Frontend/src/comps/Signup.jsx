import React from 'react'
import { Link } from 'react-router-dom'


function Signup() {
  
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className="card card-border bg-base-300 w-140 h-90 mb-20">
        <div className="card-body">
          <div className='flex flex-col items-center'>
              <h2 className="card-title text-3xl font-medium ">Sign in to you Account</h2>
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

          <div className="card-actions justify-center ">
            <button className="btn btn-primary w-50 mb-5" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup