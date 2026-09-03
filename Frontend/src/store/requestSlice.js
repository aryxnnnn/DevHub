import { createSlice } from "@reduxjs/toolkit";

const RequestSlice = createSlice({
  name : "requests" , 
  initialState : null , 
  reducers : {
    addRequests : (state, action) => action.payload , 
  }
})

export const RequestActions = RequestSlice.actions ; 

export default RequestSlice ; 