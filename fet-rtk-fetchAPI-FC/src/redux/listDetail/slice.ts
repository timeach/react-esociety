import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'

interface ListDetailState {
  // value1: string;
  // value2: number;
  list: {id: number, name: string}[] 
}

const initialState : ListDetailState = {
  // value1: '',
  // value2: 0,
  list:  [ 
    // { "id": 1, "name": "Kate" },
    // { "id": 2, "name": "Ellen" }
    ]
}

// export const getListDetail = createAsyncThunk(
//   "listDetail/getListDetail",
//   async (thunkAPI) => {
//     const list = await axios.get('https://localhost:7073/People');
//     return list
//   }
// )


export const listDetailSlice = createSlice({
  name: "listDetail",
  initialState,
  reducers: {
    fetchDone: (state, action) => {
      state.list = action.payload
    },
    delName: (state, action) => {
        for (let i in state.list) {
          const person = state.list[i]; 
          if(person.name === action.payload ){
            state.list.splice(parseInt(i),1)
          }
      }
    },
    addName: (state, action) => {
      if(action.payload.indexOf("e") != -1 || action.payload.indexOf("E") != -1){
        const number = state.list.length + 1
        state = {
          ...state,
          list: [...state.list, {id:number, name: action.payload}]
        }
        return state
      }
       else { alert("name must contain an e or E") }
    }
  }
})