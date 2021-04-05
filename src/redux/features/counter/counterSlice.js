import { createSlice } from "@reduxjs/toolkit";
import * as Api from "../../../api/index";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: [],
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const countValue = (state) => state.counter.value;
export default counterSlice.reducer;
