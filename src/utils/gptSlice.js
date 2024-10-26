import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    gptResult:null,
  },
  reducers: {
    changeGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovieResults:(state,action)=>{
       state.gptResult = action.payload;
    }
  },
});

export const {changeGptSearch,addGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;
