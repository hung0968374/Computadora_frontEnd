import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  arrayOfPosts: [],
  isLoadingFetchAllPost: false,
  isLoadingFetchSpecifiedPost: false,
  error: null,
};
export const fetchAllPostFromApi = createAsyncThunk(
  "posts/fetchAllPostFromApi",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchSpecifiedPostFromApi = createAsyncThunk(
  "posts/fetchSpecifiedPostFromApi",
  async ({ id }, thunkAPI) => {
    try {
      const response = await axios.get(`http://localhost:5000/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getData: (state, action) => {
      state.arrayOfPosts.push(action.payload);
    },
  },
  extraReducers: {
    [fetchAllPostFromApi.pending]: (state, action) => {
      state.isLoadingFetchAllPost = true;
      state.error = null;
    },
    [fetchAllPostFromApi.fulfilled]: (state, action) => {
      state.arrayOfPosts = action.payload;
      state.isLoadingFetchAllPost = false;
      state.error = null;
    },
    [fetchAllPostFromApi.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },

    [fetchSpecifiedPostFromApi.pending]: (state, action) => {
      state.isLoadingFetchSpecifiedPost = true;
      state.error = null;
    },
    [fetchSpecifiedPostFromApi.fulfilled]: (state, action) => {
      state.arrayOfPosts = action.payload;
      state.isLoadingFetchSpecifiedPost = false;
      state.error = null;
    },
    [fetchSpecifiedPostFromApi.rejected]: (state, action) => {
      state.isLoadingFetchSpecifiedPost = false;
      state.error = action.error.message;
    },
  },
});

export const { getData } = postSlice.actions;
export const allPosts = (state) => state.posts.arrayOfPosts;
export default postSlice.reducer;
