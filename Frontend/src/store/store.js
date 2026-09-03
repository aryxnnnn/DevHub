import {configureStore} from "@reduxjs/toolkit" ; 
import UserSlice from "./userSlice";
import FeedSlice from "./feedSlice";
import ConnectionSlice from "./connection";
import RequestSlice from "./requestSlice";

const store = configureStore({
  reducer :{
      user : UserSlice.reducer , 
      feed : FeedSlice.reducer ,
      connections : ConnectionSlice.reducer ,
      requests : RequestSlice.reducer ,  
  }
}) ;

export default store ;