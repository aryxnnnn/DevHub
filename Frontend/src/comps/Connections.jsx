import axios from 'axios';
import React, { useEffect } from 'react'
import { BaseUrl } from '../utils/constants';

function Connections() {

  const fetchConnections = async()=>{
    try {
      const res = await axios.get(BaseUrl + "/user/connections" , {withCredentials : true }) ; 
      console.log(res.data.connections) ; // array of connections 

    } catch (error) {
      console.log(error?.response?.data) ; 
    }
  }

  useEffect(()=>{
    fetchConnections() ; 
  }, [])

  return (
    <div>Connections</div>
  )
}

export default Connections