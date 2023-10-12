import { createSlice } from "@reduxjs/toolkit";
export const eventSlice = createSlice({
   name: "events",
   initialState: {
      value: [],
   },
   reducers: {
      setData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setData } = eventSlice.actions;
export default eventSlice.reducer;
