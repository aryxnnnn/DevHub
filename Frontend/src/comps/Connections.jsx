import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { BaseUrl } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {ConnectionActions} from '../store/connection' ; 
import LoadingSpinner from './LoadingSpinner';
import ConnectionCard from './ConnectionCard';
import RedToast from './RedToast';

function Connections() {

  const dispatch = useDispatch() ;
  const [showToast , setToast] = useState(false) ;  

  const userConnections = useSelector((state)=> state.connections) ; 

  const fetchConnections = async()=>{
    try {
      const res = await axios.get(BaseUrl + "/user/connections" , {withCredentials : true }) ; 
      // console.log(res.data.connections) ; // array of connections 
      dispatch(ConnectionActions.addConnections(res.data.connections))

    } catch (error) {
      console.log(error?.response?.data) ; 
    }
  }

  useEffect(()=>{
    fetchConnections() ; 
  }, [])

  const handleDisconnect = async (userId) => {
    try {
      await axios.post(BaseUrl + `/disconnected/${userId}`,{} , { withCredentials: true });
      await fetchConnections();
      // console.log("user disconnected") 
      setToast(true) ; 

      setTimeout(() => {
        setToast(false);
      }, 3000);

    } catch (error) {
      console.log(error?.response?.data);
    }
  };

  if(!userConnections){
    return <LoadingSpinner/>
  }

  
  return <>
    {showToast && <RedToast text = {"User disconnected !"}/>}

    { userConnections.length === 0 ?
        <p className='min-h-20 flex items-center justify-center text-2xl text-center'>No connections yet. Start adding nerds 🤓</p>
      : <h1 className='text-3xl text-pink-500 text-center my-7'>See all your connections at one place !</h1>
    }

    {userConnections.map((connection)=>{
      return <ConnectionCard user={connection} key={connection._id} removeUser = {handleDisconnect}/>
    })}
  </>
}

export default Connections