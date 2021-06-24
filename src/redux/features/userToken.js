import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
};

const userToken = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("action", action);
      state.token = action.payload;
    },
  },
});

export const { setToken } = userToken.actions;
export const tokenFromRdx = (state) => state.token.token;
export default userToken.reducer;
