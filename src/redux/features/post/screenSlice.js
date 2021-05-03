import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  name: "handlingScreenYcoordinate",
  initialState: {
    goingUp: true,
  },
  reducers: {
    goUp: (state, action) => {
      state.goingUp = action.payload;
    },
  },
});

export const { goUp } = screenSlice.actions;
export const goingToUpper = (state) => state.screen.goingUp;
export default screenSlice.reducer;
