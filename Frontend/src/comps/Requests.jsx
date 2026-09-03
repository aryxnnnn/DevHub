import axios from 'axios';
import React from 'react' ; 
import { useEffect , useState} from 'react';
import { BaseUrl } from '../utils/constants';
import RequestCard from './RequestCard';
import { useDispatch ,useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import {RequestActions} from '../store/requestSlice'
import Toast from './Toast'
import RedToast from './RedToast';

function Requests() {

    const [acceptToast , setAcceptToast] = useState(false) ; 
    const [rejectToast , setRejectToast] = useState(false) ; 

    const dispatch = useDispatch() ; 
    const userRequests = useSelector((state)=> state.requests) ; 

    const fetchRequests = async()=>{
      try {
        const res = await axios.get(BaseUrl + "/user/requests" , {withCredentials :true}) ; 
        // console.log(res.data.userRequests) ; // array of requests 
        
        dispatch(RequestActions.addRequests(res.data.userRequests)) ; 

      } catch (error) {
        console.log(error?.response?.data) ; 
      }
    }

    useEffect(()=>{
      fetchRequests() ;
    } , []) ;

  const handleAccept = async (reqId) => {
    try {
      await axios.post(BaseUrl + `/review/accepted/${reqId}`,{} , { withCredentials: true }) ; 

      fetchRequests() ; 
      setAcceptToast(true) ; 

      setInterval(() => {
        setAcceptToast(false)
      }, 2500);

      
    } catch (error) {
      console.log(error?.response?.data);
    }
  } ;
  const handleReject = async (reqId) => {
    try {
      await axios.post(BaseUrl + `/review/rejected/${reqId}`,{} , { withCredentials: true }) ; 

      fetchRequests() ; 
      setRejectToast(true) ; 

      setInterval(() => {
        setRejectToast(false)
      }, 2500);

      
    } catch (error) {
      console.log(error?.response?.data);
    }
  } ;


  if(!userRequests){
    return <LoadingSpinner/>
  }
  
  return <>
    {acceptToast && <Toast text = {"User Connected ✅!"}/>}
    {rejectToast && <RedToast text = {"User reqeust rejected ❌ !"}/>}

    { userRequests.length === 0 ?
        <p className='min-h-20 flex items-center justify-center text-2xl text-center'>No Pending Requests 📩 </p>
      : <h1 className='text-3xl text-pink-500 text-center my-7'>See your Pending requests at one place !</h1>
    }

    {userRequests.map((request)=>{
        // console.log("REQUEST:", request)
        // console.log("FROM USER:", request.fromUserId)

      return <RequestCard requestId = {request._id} user = {request.fromUserId} key={request._id} acceptRequest = {handleAccept} rejectRequest = {handleReject}/>
    })}
  </>
}

export default Requests