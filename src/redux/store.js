import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import laptopReducer from "./features/post/laptopItemSlice";
import screenReducer from "./features/post/screenSlice";
import cartSlice from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

import counterReducer from "./saga/counter/counterSlice";
import createSagaMiddleware from "redux-saga";
import laptopItemsSlice from "./saga/laptopItems/laptopItemsSlice";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    laptopItemBySeperatedPage: laptopReducer,
    cartItems: cartSlice,
    screen: screenReducer,
    user: userReducer,
    counter: counterReducer,
    lapItemsSlice: laptopItemsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
