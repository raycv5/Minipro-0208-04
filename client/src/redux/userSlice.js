import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
   name: "users",
   initialState: {
      value: {},
   },
   reducers: {
      login: (state, action) => {
         state.value = action.payload;
      },
      logout: (state) => {
         state.value = {}
      }
   },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;