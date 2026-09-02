import {configureStore} from "@reduxjs/toolkit" ; 
import UserSlice from "./userSlice";
import FeedSlice from "./feedSlice";

const store = configureStore({
  reducer :{
      user : UserSlice.reducer , 
      feed : FeedSlice.reducer ,
  }
}) ;

export default store ;