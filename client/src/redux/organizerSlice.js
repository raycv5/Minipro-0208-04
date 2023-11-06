import { createSlice } from "@reduxjs/toolkit";
export const organizerSlice = createSlice({
   name: "organizer",
   initialState: {
      value: [],
   },
   reducers: {
      setData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { setData } = organizerSlice.actions;
export default organizerSlice.reducer;
