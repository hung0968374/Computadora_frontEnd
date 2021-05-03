import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import laptopReducer from "./features/post/laptopItemSlice";
import screenReducer from "./features/post/screenSlice";
import cartSlice from "./features/cart/cartSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    laptopItemBySeperatedPage: laptopReducer,
    cartItems: cartSlice,
    screen: screenReducer,
  },
});
