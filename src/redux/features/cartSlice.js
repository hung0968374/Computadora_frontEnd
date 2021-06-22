import { createSlice, current } from "@reduxjs/toolkit";

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
      const index = state?.itemsInsideTheCart?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.itemsInsideTheCart[index].quantity =
          state.itemsInsideTheCart[index].quantity + 1;
      } else {
        state.itemsInsideTheCart?.push(action.payload);
      }
      return state;
    },
    addingItemQuantity: (state, action) => {
      console.log(action.payload);
      console.log(current(state.itemsInsideTheCart));
      const index = state?.itemsInsideTheCart?.findIndex(
        (product) => product.id === action.payload.id
      );
      state.itemsInsideTheCart[index].quantity =
        state.itemsInsideTheCart[index].quantity + 1;
    },
    subtractItemQuantity: (state, action) => {
      const index = state.itemsInsideTheCart.findIndex(
        (product) => product.id === action.payload.id
      );
      if (state.itemsInsideTheCart[index].quantity > 1) {
        state.itemsInsideTheCart[index].quantity =
          state.itemsInsideTheCart[index].quantity - 1;
      }
    },
    deleteAnItemFromCart: (state, action) => {
      state.itemsInsideTheCart = state.itemsInsideTheCart.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addingNewProductToCart,
  recoverItemsInCartEveryRefresh,
  addingItemQuantity,
  subtractItemQuantity,
  deleteAnItemFromCart,
} = cartSlice.actions;
export const itemInCart = (state) => state.cartItems.itemsInsideTheCart;
export default cartSlice.reducer;
