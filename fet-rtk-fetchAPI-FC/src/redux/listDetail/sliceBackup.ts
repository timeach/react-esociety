import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import store from "../store"


interface ListDetailState {
  value1: string;
  value2: number;
  list: {id: number, name: string}[] 
}

const initialState : ListDetailState = {
  value1: '',
  value2: 0,
  list:  [ 
    // { "id": 1, "name": "Kate" },
    // { "id": 2, "name": "Ellen" }
    ]
}

export const getListDetail = createAsyncThunk(
  "listDetail/getListDetail",
  async (thunkAPI) => {
    const data = await axios.get('https://localhost:7073/People');
    // store.dispatch(listDetailSlice.actions.fetchDone(data))
    return data;
  }
)

export const addListDetail = createAsyncThunk(
  "listDetail/addListDetail",
  async (parameters: { name: string }, thunkAPI) => {
    const data = await axios.post(
      'https://localhost:7073/People',
      {
        name: parameters.name
      }
    );
    return data
  }
)

export const delListDetail = createAsyncThunk(
  "listDetail/delListDetail",
  async (parameters: { id: number }, thunkAPI) => {
    return await axios.delete(`https://localhost:7073/People?${parameters.id}`,)
  }
)

export const listDetailSlice = createSlice({
  name: "listDetail",
  initialState,
  reducers: {
    // fetchDone: (state, action) => {
    //   state.list = action.payload
    // },
    // delName: (state, action) => {
    //     for (let i in state.list) {
    //       const person = state.list[i]; 
    //       if(person.name === action.payload ){
    //         state.list.splice(parseInt(i),1)
    //       }
    //   }
    // },
    // addName: (state, action) => {
    //   if(action.payload.indexOf("e") != -1 || action.payload.indexOf("E") != -1){
    //     const number = state.list.length + 1
    //     state = {
    //       ...state,
    //       list: [...state.list, {id:number, name: action.payload}]
    //     }
    //     return state
    //   }
    //    else { alert("name must contain an e or E") }
    // }
  },
  extraReducers: {
    [getListDetail.pending.type]:(state) => {},
    [getListDetail.fulfilled.type]:(state, action) => {
      state.list = action.payload;
    },
    [getListDetail.rejected.type]:(state, action) => {},
    [addListDetail.pending.type]:(state) => {},
    [addListDetail.fulfilled.type]:(state, action) => {
      // state.list = getListDetail()
    },
    [addListDetail.rejected.type]:(state, action) => {},
    [delListDetail.pending.type]:(state) => {},
    [delListDetail.fulfilled.type]:(state, action) => {
      //   for (let i in state.list) {
      //     const person = state.list[i]; 
      //     if(person.id === action.payload ){
      //       state.list.splice(parseInt(i),1)
      //     }
      // }
    }
  }
})