import { createSlice } from "@reduxjs/toolkit";

const FeedSlice = createSlice({
  name: "feed" , 
  initialState : [] , 
  reducers : {
    addFeed : (state , action) =>{
      return action.payload ; 
    } ,
    removeFeed: (state , action) => null , 
  }

})

export const FeedActions = FeedSlice.actions ; 

export default FeedSlice ; 