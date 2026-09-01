import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData : null , 
  isAuthenticated : null , 
}

const UserSlice = createSlice({
    name : "user" , 
    initialState : initialState , 
    reducers :{
      login : (state , action)=>{
        state.userData = action.payload ;
        state.isAuthenticated = true ; 
      } , 
      logout : (state , action) =>{
        state.userData = null ;
        state.isAuthenticated = false ; 
      }
    }
}) 

export const UserActions = UserSlice.actions ; 

export default UserSlice ;