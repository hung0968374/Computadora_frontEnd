import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "",
};

const laptopItemsSlice = createSlice({
  name: "laptopItemsSlice",
  initialState,
  reducers: {
    fetchingItems: (state, action) => {
      state.status = "loading";
    },
    fetchedItems: (state, action) => {
      state.status = "done";
      state.items = [...state.items, ...action.payload];
    },
  },
});

export const { fetchingItems, fetchedItems } = laptopItemsSlice.actions;
export const laptopItemsFromRdx = (state) => state.lapItemsSlice;
export default laptopItemsSlice.reducer;
