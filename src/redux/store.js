import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postReducer from "./features/post/postSlice";
import laptopReducer from "./features/post/laptopItemSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    laptopItemBySeperatedPage: laptopReducer,
  },
});
