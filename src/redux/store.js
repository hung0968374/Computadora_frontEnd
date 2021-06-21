import { configureStore } from "@reduxjs/toolkit";
import AddtoCartReducer from "./AddToCart/AddtoCartSlice";

export default configureStore({
  reducer: {
    AddToCart_: AddtoCartReducer,
  },
});
