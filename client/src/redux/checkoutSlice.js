import { createSlice } from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    value: [],
  },
  reducers: {
    checkoutData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { checkoutData } = checkoutSlice.actions;
export default checkoutSlice.reducer;
