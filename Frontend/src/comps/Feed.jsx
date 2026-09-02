import React, { useEffect } from 'react'
import axios from 'axios'
import { BaseUrl } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { FeedActions } from '../store/feedSlice';

import FeedCard from './FeedCard';


function Feed() {

  const dispatch = useDispatch() ; 
  const userFeed = useSelector((state)=>state.feed) ; 
  const user = userFeed[0] ; 
  console.log(userFeed , user ) ; 

  
  useEffect(() => {
    if (userFeed.length > 0) return;
    
    const getFeed = async () => {
      try {
        const feed = await axios.get( BaseUrl + "/user/feed",
          { withCredentials: true });
          
          dispatch(FeedActions.addFeed(feed.data.Feed));
          
        } catch (error) {
          console.log(error.response?.data);
        }
      };
      
      getFeed();
    }, [userFeed.length, dispatch]);
    
    return (
    <div className='flex flex-col justify-center items-center '>
      <div className='m-4'>
        {user && <FeedCard user={user} key={user}/>}
        {/* {userFeed.map((user)=>{
          // {console.log(user.firstName)} ; 
          return <FeedCard user = {user} key={user._id}/>
        })} */}
      </div>
    </div>
  )
}

export default Feed