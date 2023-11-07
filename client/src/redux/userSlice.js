import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {},
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {};
    },
    addInitialPoints: (state, action) => {
      if (!state.initialPointsReceived) {
        state.value.points += 20;
        state.initialPointsReceived = true;
      }
    },
    addPoints: (state, action) => {
      state.value.points += action.payload;
      if (state.value.points > 1000) {
        state.value.points = 1000;
      }
    },
    subtractPoints: (state, action) => {
      state.value.points -= action.payload;
      if (state.value.points < 0) {
        state.value.points = 0;
      }
    },
  },
});

export const { login, logout, addInitialPoints, addPoints, subtractPoints } =
  userSlice.actions;

export default userSlice.reducer;
