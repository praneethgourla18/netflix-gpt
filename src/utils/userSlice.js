import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload;  // Update state with user data
    },
    removeUser: () => {
      return null;  // Reset state to null on user removal
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
