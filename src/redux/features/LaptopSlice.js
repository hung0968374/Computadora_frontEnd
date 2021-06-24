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
    removeItem: (state, action) => {
      state.arrayOfLaptopItems = state.arrayOfLaptopItems.filter(
        (item) => item._id !== action.payload
      );
    },

    //////////////redux saga
    isFetchingLaptopDatasByPage: (state, action) => {
      state.status = "loading";
      state.error = false;
    },
    fetchedLaptopDatasByPage: (state, action) => {
      state.status = "done";
      state.arrayOfLaptopItems = [
        ...state.arrayOfLaptopItems,
        ...action.payload,
      ];
      state.error = false;
      state.pages.push(action.payload.page);
    },
  },
});

export const {
  isFetchingLaptopDatasByPage,
  fetchedLaptopDatasByPage,
  removeItem,
} = LaptopSlice.actions;
export const laptopItemsFromRdx = (state) => state.lapItemsSlice;

export default LaptopSlice.reducer;
