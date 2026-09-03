import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice = createSlice({
  name : "connection" , 
  initialState : null , 
  reducers : {
    addConnections : (state ,action ) =>  action.payload , 
    removeConnection : (state , action) => action.payload
  }
})

export const ConnectionActions = ConnectionSlice.actions ; 

export default ConnectionSlice ; 