import { createSlice } from "@reduxjs/toolkit"

interface ListDetailState {
  value1: string;
  value2: string;
  list: {id: number, name: string}[] 
}

const initialState : ListDetailState = {
  value1: '',
  value2: '',
  list:  [ 
    { "id": 1, "name": "Kate" },
    { "id": 2, "name": "Ellen" }
    ]
}

export const listDetailSlice = createSlice({
  name: "listDetail",
  initialState,
  reducers: {
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