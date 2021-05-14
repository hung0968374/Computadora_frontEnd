import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "customUser",
  initialState: {
    isCustomizedUser: false,
  },
  reducers: {
    toggleIsCustomizedUser: (state, action) => {
      state.isCustomizedUser = action.payload;
    },
  },
});

export const { toggleIsCustomizedUser } = userSlice.actions;
export const isCustomizedUser = (state) => state.user.isCustomizedUser;
export default userSlice.reducer;
