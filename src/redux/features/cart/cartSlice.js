import { createSlice } from "@reduxjs/toolkit";

// interface product {
//   id: number;
//   productName: string;
//   quantity: number;
//   price: string;
//   imgUrl: string;
// }
const initialState = {
  itemsInsideTheCart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addingNewProductToCart: (state, action) => {
      const index = state.itemsInsideTheCart.findIndex(
        (item) => item.id == action.payload.id
      );
      if (index >= 0) {
        state.itemsInsideTheCart[index].quantity =
          state.itemsInsideTheCart[index].quantity + 1;
      } else {
        state.itemsInsideTheCart.push(action.payload);
      }
      return state;
    },
  },
});

export const { addingNewProductToCart } = cartSlice.actions;
export const itemInCart = (state) => state.cartItems;
export default cartSlice.reducer;
