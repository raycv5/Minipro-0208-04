import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { organizerSlice } from "./organizerSlice";
import { eventsSlice } from "./eventSlice";
import { citySlice } from "./citySlice";
import { countrySlice } from "./countrySlice";
import { categorySlice } from "./categorySlice";

const rootReducer = combineReducers({
   organizer: organizerSlice.reducer,
   user: userSlice.reducer,
   events: eventsSlice.reducer,
   cities: citySlice.reducer,
   country: countrySlice.reducer,
   category: categorySlice.reducer,
});

export const store = configureStore({
   reducer: rootReducer,
});
