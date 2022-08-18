import { createStore } from 'redux';
import listReducer from './listReducer'
import { listDetailSlice } from "./listDetail/slice"
import { configureStore } from "@reduxjs/toolkit"

// const store = createStore(listReducer);

export const store = configureStore({
  reducer: listDetailSlice.reducer,
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>

export default store