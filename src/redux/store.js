import { configureStore } from "@reduxjs/toolkit";
import laptopReducer from "./features/post/laptopItemSlice";
import screenReducer from "./features/post/screenSlice";
import cartSlice from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
export default configureStore({
  reducer: {
    laptopItemBySeperatedPage: laptopReducer,
    cartItems: cartSlice,
    screen: screenReducer,
    user: userReducer,
  },
});
