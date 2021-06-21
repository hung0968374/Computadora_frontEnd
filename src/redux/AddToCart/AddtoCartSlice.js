import { createSlice } from "@reduxjs/toolkit";

const AddToCartSlice = createSlice({
  name: "AddToCart",
  initialState: {
    inventory: JSON.parse(localStorage.getItem("inventory")),
    quantity: JSON.parse(localStorage.getItem("quantity")),
    first: true,
  },
  reducers: {
    getItemFromLocalCart: (state) => {
      state.inventory = JSON.parse(localStorage.getItem("inventory"));
      state.quantity = JSON.parse(localStorage.getItem("quantity"));
    },
    addToCart: (state, actions) => {
      let index = 0;
      let checkExist = false;

      if (state.inventory.length === 0 && state.first === true) {
        state.inventory.push(actions.payload);
        state.quantity += 1;
        state.first = false;
        localStorage.setItem("inventory", JSON.stringify(state.inventory));
        localStorage.setItem("quantity", JSON.stringify(state.quantity));
        return;
      }

      if (state.inventory.length !== 0) {
        for (let i = 0; i < state.inventory.length; i++) {
          if (state.inventory[i].name === actions.payload.name) {
            index = i;
            checkExist = true;
            break;
          }
          if (state.inventory[i].name !== actions.payload.name) {
            checkExist = false;
          }
        }

        if (checkExist === true) {
          state.inventory[index].quantity += 1;
          state.quantity += 1;
        }

        if (checkExist === false) {
          state.inventory.push(actions.payload);
          state.quantity += 1;
        }
        localStorage.setItem("inventory", JSON.stringify(state.inventory));
        localStorage.setItem("quantity", JSON.stringify(state.quantity));
      }
    },
    reNewCart: (state) => {
      state.inventory = [];
      state.quantity = 0;
      state.first = true;
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    incrementQuantity: (state, actions) => {
      let index = 0;
      for (const item of state.inventory) {
        if (item.name === actions.payload) {
          break;
        }
        index++;
      }
      state.quantity++;
      state.inventory[index].quantity++;
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    decrementQuantity: (state, actions) => {
      let index = 0;
      for (const item of state.inventory) {
        if (item.name === actions.payload) {
          break;
        }
        index++;
      }
      if (state.inventory[index].quantity === 1) {
        state.quantity--;
        state.inventory.splice(index, 1);
      } else if (state.inventory[index].quantity !== 1) {
        state.quantity--;
        state.inventory[index].quantity--;
      }
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
    deleteOneFromCart: (state, actions) => {
      let index = 0;
      for (const item of state.inventory) {
        if (item.name === actions.payload) {
          break;
        }
        index++;
      }
      state.quantity = state.quantity - state.inventory[index].quantity;
      console.log(state.inventory[index].quantity);
      state.inventory.splice(index, 1);
      localStorage.setItem("inventory", JSON.stringify(state.inventory));
      localStorage.setItem("quantity", JSON.stringify(state.quantity));
    },
  },
});
export const {
  getItemFromLocalCart,
  incrementQuantity,
  decrementQuantity,
  deleteOneFromCart,
} = AddToCartSlice.actions;
export const { reNewCart } = AddToCartSlice.actions;
export const { addToCart } = AddToCartSlice.actions;
export default AddToCartSlice.reducer;
