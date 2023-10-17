import { combineReducers, configureStore} from "@reduxjs/toolkit";
import { eventSlice } from "./event"
import { userSlice } from "./userSlice";

const rootReducer = combineReducers({ 
   events: eventSlice.reducer,
   user : userSlice.reducer,
});

export const store = configureStore({
   reducer: rootReducer
});
