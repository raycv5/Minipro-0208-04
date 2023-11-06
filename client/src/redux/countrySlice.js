import { createSlice } from "@reduxjs/toolkit";
export const countrySlice = createSlice({
   name: "country",
   initialState: {
      value: [],
   },
   reducers: {
      countryData: (state, action) => {
         state.value = action.payload;
      },
   },
});

export const { countryData } = countrySlice.actions;
export default countrySlice.reducer;
