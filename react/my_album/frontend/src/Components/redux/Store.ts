import { combineReducers } from "redux";
import { CategoriesReducer } from "./CategoriesReducer";
import { configureStore } from "@reduxjs/toolkit";

//which reducers should i use
const reducers = combineReducers({ category: CategoriesReducer });

//combine into store
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
