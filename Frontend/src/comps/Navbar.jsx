import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { UserActions } from '../store/userSlice';
import { BaseUrl } from '../utils/constants';
import  axios from "axios"
import { Link } from 'react-router-dom';

function Navbar() {

  const user = useSelector(state => state.user) ; 
  const userData = user.userData ; 
  const dispatch = useDispatch() ; 

  const handleLogout = async()=>{
    try {
      await axios.post(BaseUrl + "/logout" ,{} , {withCredentials : true }) ;
      dispatch(UserActions.logout()) ; 
    } catch (error) {
      console.log(error) ; 
    }
  }
  
  return <>
    <div className="navbar bg-base-300 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-2xl">DevHub👨‍💻</Link>
      </div>
      <div className="flex gap-2">
        {/* <input type="text" placeholder="Search" className="input w-24 md:w-auto" /> */}
        {user.userData && (<div className="dropdown dropdown-end mx-6">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 rounded-full">
              <img
                alt="User Photo"
                src = {userData.photoUrl} />
            </div>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-42 p-2 shadow text-yellow-500" >

            <li ><Link className="justify-start text-lg"  to = "/">Home</Link></li>
            <li ><Link className="justify-start text-lg"  to = "/profile/view">Profile</Link></li>
            {/* <li><Link className="justify-start text-lg"  to= "/profile/password">Settings</Link></li> */}
            <li ><Link className="justify-start text-lg"  to = "/user/connections">My Connections</Link></li>
            <li><Link className="justify-start text-lg"  to= "/user/requests">Requests</Link></li>
            <li><Link className="justify-start text-lg"  to= "/chat">Chats
            </Link></li>
            <li><button className="justify-start text-lg"  onClick={handleLogout}>Logout</button></li>
          </ul>
        </div>)}
      </div>
    </div>
  </>
}

export default Navbar