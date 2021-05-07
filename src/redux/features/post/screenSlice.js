import { createSlice } from "@reduxjs/toolkit";

const screenSlice = createSlice({
  name: "handlingScreenYcoordinate",
  initialState: {
    goingUp: true,
    discardHeader: false,
  },
  reducers: {
    goUp: (state, action) => {
      state.goingUp = action.payload;
    },
    discardNavBar: (state, action) => {
      state.discardHeader = action.payload;
    },
  },
});

export const { goUp, discardNavBar } = screenSlice.actions;
export const goingToUpper = (state) => state.screen.goingUp;
export const discardNavOrNot = (state) => state.screen.discardHeader;
export default screenSlice.reducer;
