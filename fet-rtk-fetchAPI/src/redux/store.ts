import { createStore } from 'redux';
import listReducer from './listReducer'
import { listDetailSlice } from "./listDetail/slice"

// const store = createStore(listReducer);

const store = createStore(listDetailSlice.reducer);

export default store