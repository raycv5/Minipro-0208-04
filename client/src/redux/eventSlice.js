import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
   name: "events",
   initialState: {
      value: [],
   },
   reducers: {
      eventsData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { eventsData } = eventsSlice.actions;
export default eventsSlice.reducer;
