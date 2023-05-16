import { combineReducers } from "redux";
import { SongReducer } from "./SongReducer";
import { CategoriesReducer } from "./CategoriesReducer";
import { configureStore } from "@reduxjs/toolkit";

//which reducer should i use
const reducers = combineReducers({
  songs: SongReducer,
  category: CategoriesReducer,
});

//combine all reducers to one single store....
export const youtube = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }), //do not look on serialization errors
});

//middleware => התערבות מרגע הכנת המידע ועד להצגה שלו
