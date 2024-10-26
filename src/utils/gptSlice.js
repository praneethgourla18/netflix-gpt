import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    gptResult:null,
    searchClicked:false,
  },
  reducers: {
    changeGptSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addGptMovieResults:(state,action)=>{
       state.gptResult = action.payload;
    },
    changeSearchClicked: (state) => {
      state.searchClicked = !state.searchClicked;
    },
  },
});

export const {changeGptSearch,addGptMovieResults,changeSearchClicked} = gptSlice.actions;

export default gptSlice.reducer;
