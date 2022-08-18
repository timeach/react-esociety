export interface ListState {
  value1: string;
  value2: string;
  list: {id: number, name: string}[] 
}

const defaultState: ListState = {
  value1: '',
  value2: '',
  list:  [ 
    { "id": 1, "name": "Kate" },
    { "id": 2, "name": "Ellen" }
    ]
}

export default (state = defaultState, action) => {
  if(action.type == "del_name") {
    for (let i in state.list) {
      const person = state.list[i]; 
      if(person.name === action.payload ){
        state.list.splice(parseInt(i),1)
        // console.log(state.list)
      }
    }
    const newState = state
    // console.log(newState)
    return newState
  };

  if(action.type == "add_name") {
    if(action.payload.indexOf("e") != -1 || action.payload.indexOf("E") != -1){
      const number = state.list.length + 1
      const newState = {
        ...state,
        list: [...state.list, {id:number, name: action.payload}]
      }
      return newState
    }
     else { alert("name must contain an e or E") }
  }

  return state
}