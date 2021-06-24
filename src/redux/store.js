import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";
import laptopItemsReducer from "./features/LaptopSlice";
import rootSaga from "./saga/rootSaga";
import cartReducer from "./features/cartSlice";
import tokenReducer from "./features/userToken";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    counter: counterReducer,
    lapItemsSlice: laptopItemsReducer,
    cartItems: cartReducer,
    token: tokenReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
