import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "player",
  initialState: {
    moviePlayerVideo: null,
    tvShowPlayerVideo: null,
  },
  reducers: {
    addMovieVideo: (state, action) => {
      state.moviePlayerVideo = action.payload;
    },
    addTvShowVideo: (state, action) => {
      state.tvShowPlayerVideo = action.payload;
    },
  },
});
export default playerSlice.reducer;
export const { addMovieVideo, addTvShowVideo } = playerSlice.actions;