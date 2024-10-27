import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./movieSlice"
import gptReducer from "./gptSlice"
import playerReducer from "./playerSlice"

const appStore = configureStore(
  {
    reducer:{
      user:userReducer,
      movies:moviesReducer,
      gpt:gptReducer,
      player: playerReducer,
    },
 }
)
export default appStore;