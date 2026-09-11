import Navbar from "./comps/Navbar"
import Footer from "./comps/Footer";
import { Outlet } from "react-router-dom";
import "./index.css"
import axios from 'axios';
import React, { useEffect } from 'react' ; 
import { BaseUrl } from './utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from './store/userSlice';


function App() {

  const dispatch = useDispatch() ; 

  const {userData} = useSelector((state)=>state.user) ; 

  const fetchUser = async()=>{
    try {
      const res = await axios.get(BaseUrl + "/profile/view" , {withCredentials : true})

      dispatch(UserActions.login(res.data)) ; 
       //console.log(res.data) ;  // data came successfully  
      
    } catch (error) {
        if (error.response?.status === 401) {
          dispatch(UserActions.logout());
        }
      console.log(error.message) 
    }
  }

  useEffect(()=>{
    fetchUser() ; 
  } , [])

  return <>
    <Navbar/> 
    <main className="min-h-screen flex flex-col">
      <Outlet></Outlet>
    </main>
    <Footer/>
  </> 
}

export default App
