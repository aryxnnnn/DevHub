import React, { useEffect , useState } from 'react'
import axios from 'axios'
import { BaseUrl } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { FeedActions } from '../store/feedSlice';
import Toast from "./Toast";
import RedToast from "./RedToast";

import FeedCard from './FeedCard';


function Feed() {

  const [acceptToast, setAcceptToast] = useState(false);
  const [rejectToast, setRejectToast] = useState(false);

  const dispatch = useDispatch() ; 
  const userFeed = useSelector((state)=>state.feed) ; 
  const user = userFeed[0] ; 
  // console.log(userFeed , user ) ; 

  const getFeed = async () => {
   try {
     const feed = await axios.get( BaseUrl + "/user/feed",
       { withCredentials: true });
       
       dispatch(FeedActions.addFeed(feed.data.Feed));
       
     } catch (error) {
       console.log(error.response?.data);
     }
   };
  
    useEffect(() => {
      getFeed();
    }, []);


    const handleInterested = async(userId)=>{
      try {
        await axios.post(BaseUrl + `/request/send/interested/${userId}` , {} , {withCredentials : true}) ;
  
        getFeed()
        setAcceptToast(true);
  
        setTimeout(() => {
          setAcceptToast(false);
        }, 2500);
  
      } catch (error) {
        console.log(error?.response?.data);
      }
    }
  
    const handleIgnore = async (userId) => {
      try {
        await axios.post(
          BaseUrl + `/request/send/ignore/${userId}`,
          {},
          { withCredentials: true }
        );
  
        getFeed();
        setRejectToast(true);
  
        setTimeout(() => {
          setRejectToast(false);
        }, 2500);
      } catch (error) {
        console.log(error?.response?.data);
      }
    };

    // const getFeed = async () => {
    //   try {
    //     const feed = await axios.get( BaseUrl + "/user/feed",
    //       { withCredentials: true });
          
    //       dispatch(FeedActions.addFeed(feed.data.Feed));
          
    //     } catch (error) {
    //       console.log(error.response?.data);
    //     }
    //   };
      
    //   getFeed();
    // }, [userFeed.length, dispatch]);

    if(!user){
      return <h1 className='text-3xl text-green-600 text-center m-10 '> No new User for your feed . </h1>
    }
    
    return <>
    {acceptToast && <Toast text={"Request sent ✅!"} />}
    {rejectToast && <RedToast text={"User ignored ❌ !"} />}

    <div className='flex flex-col justify-center items-center '>
      <div className='m-4'>
        {user && <FeedCard user={user} key={user._id} interested = {handleInterested} ignore={handleIgnore}/>}

      </div>
    </div>
  </>
}

export default Feed