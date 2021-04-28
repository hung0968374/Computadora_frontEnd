import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "../../../api/index";

export const fetchLaptopByPage = createAsyncThunk(
  "laptopItem/fetchLaptopByPageFromApi",
  async (params) => {
    try {
      const { data } = await API.fetchPostByPage(params);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  arrayOfLaptopItems: [],
  isFetchingLaptopItemsByPage: false,
  error: null,
};

const laptopItemSlice = createSlice({
  name: "laptopItems",
  initialState,
  extraReducers: {
    [fetchLaptopByPage.pending]: (state, action) => {
      state.isFetchingLaptopItemsByPage = true;
      state.error = false;
    },
    [fetchLaptopByPage.fulfilled]: (state, action) => {
      state.isFetchingLaptopItemsByPage = false;
      state.error = false;
      state.arrayOfLaptopItems = [
        ...state.arrayOfLaptopItems,
        ...action.payload,
      ];
    },
    [fetchLaptopByPage.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const {} = laptopItemSlice.actions;
export const laptopByPage = (state) => state.laptopItemBySeperatedPage;
export default laptopItemSlice.reducer;
