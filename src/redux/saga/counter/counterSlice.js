import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "",
  },
  reducers: {
    incrementSaga: (state, action) => {
      state.status = "loading";
    },
    sucessIncrementSaga: (state, action) => {
      state.status = "done";
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { incrementSaga, sucessIncrementSaga } = counterSlice.actions;
export const countVal = (state) => state.counter.value;
export default counterSlice.reducer;
