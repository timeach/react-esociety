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
    const { data } = await axios.get('https://localhost:7073/People');
    return data;
  }
)

export const addListDetail = createAsyncThunk(
  "listDetail/addListDetail",
  async (parameters: { name: string }, thunkAPI) => {
    const { data } = await axios.post(
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
  async (parameters: number , thunkAPI) => {
    return await axios.delete(`https://localhost:7073/People?id=${parameters}`,)
  }
)

export const listDetailSlice = createSlice({
  name: "listDetail",
  initialState,
  reducers: {
  },
  extraReducers: {
    [getListDetail.pending.type]:(state) => {},
    [getListDetail.fulfilled.type]:(state, action) => {
      state.list = action.payload;
    },
    [getListDetail.rejected.type]:(state, action) => {},

    [addListDetail.pending.type]:(state) => {},
    [addListDetail.fulfilled.type]:(state, action) => {
      // state.list = action.payload;
    },
    [addListDetail.rejected.type]:(state, action) => {
      alert("name must contain an e or E")
    },

    [delListDetail.pending.type]:(state) => {},
    [delListDetail.fulfilled.type]:(state, action) => {
    },
    [delListDetail.rejected.type]:(state, action) => {}
  }
})