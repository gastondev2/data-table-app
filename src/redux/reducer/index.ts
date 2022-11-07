import { combineReducers } from "@reduxjs/toolkit";
import characters from "../slices/charactersSlice";

const reducer = combineReducers({
  characters,
});

export default reducer;
