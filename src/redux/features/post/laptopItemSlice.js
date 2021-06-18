import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import * as API from "../../../api/index";

export const fetchLaptopByPage = createAsyncThunk(
  "laptopItem/fetchLaptopByPageFromApi",
  async (page) => {
    try {
      const { data } = await API.fetchPostByPage(page);
      return { data, page };
    } catch (error) {
      console.log(error);
    }
  }
);
const initialState = {
  arrayOfLaptopItems: [],
  isFetchingLaptopItemsByPage: false,
  error: null,
  pages: [],
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
      if (!state?.pages.includes(action?.payload?.page)) {
        state.arrayOfLaptopItems = [
          ...state.arrayOfLaptopItems,
          ...action.payload.data,
        ];
      }
      // console.log("state in redux", current(state));
      state.pages.push(action.payload.page);
      console.log("state", current(state));
    },
    [fetchLaptopByPage.rejected]: (state, action) => {
      state.error = true;
    },
  },
});

export const {} = laptopItemSlice.actions;
export const laptopByPage = (state) => state.laptopItemBySeperatedPage;
export default laptopItemSlice.reducer;
