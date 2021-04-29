import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import postReducer from "./features/post/postSlice";
import laptopReducer from "./features/post/laptopItemSlice";
import cartSlice from "./features/cart/cartSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer,
    laptopItemBySeperatedPage: laptopReducer,
    cartItems: cartSlice,
  },
});
