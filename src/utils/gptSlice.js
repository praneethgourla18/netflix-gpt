import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
  },
  reducers: {
    changeGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
  },
});

export const {changeGptSearch} = gptSlice.actions;

export default gptSlice.reducer;
