import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayOfLaptopItems: [],
  status: false,
  error: null,
  pages: [],
};

const LaptopSlice = createSlice({
  name: "laptopItems",
  initialState,
  reducers: {
    //////////////redux saga
    isFetchingLaptopDatasByPage: (state, action) => {
      state.status = "loading";
      state.error = false;
    },
    fetchedLaptopDatasByPage: (state, action) => {
      state.status = "done";
      state.arrayOfLaptopItems = [
        ...state.arrayOfLaptopItems,
        ...action.payload.data,
      ];
      state.error = false;
      state.pages.push(action.payload.page);
    },
  },
});

export const { isFetchingLaptopDatasByPage, fetchedLaptopDatasByPage } =
  LaptopSlice.actions;
export const laptopItemsFromRdx = (state) => state.lapItemsSlice;

export default LaptopSlice.reducer;
