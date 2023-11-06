import { createSlice } from "@reduxjs/toolkit";

export const citySlice = createSlice({
   name: "city",
   initialState: {
      value: [],
   },
   reducers: {
      cityData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { cityData } = citySlice.actions;
export default citySlice.reducer;
