import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState:{
    nowPlayingMovies:null,
    bgVideo:null,
  },
  reducers: {
     addNowPlayingMovies : (state, action) => {
       state.nowPlayingMovies = action.payload;
     },
    addVideo:(state,action)=>{
       state.bgVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies , addVideo } = movieSlice.actions;

export default movieSlice.reducer;
