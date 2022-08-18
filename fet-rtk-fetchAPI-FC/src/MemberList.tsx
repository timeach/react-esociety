import React, { useContext} from "react";
// import listdata from './listdata.json'
// import { appSetStateContext } from "./AppState"
import store from "./redux/store";
import { listDetailSlice } from "./redux/listDetail/slice"

interface MemberProps {
  id: number,
  name: string
  // delNameOnList: (name) => void;
}

const MemberList : React.FC<MemberProps> = ({id, name}) => {
  const delNameOnList = (name1) => {
        // console.log(name1);
        // const action = { type:"del_name", payload: name1 };

        // store.dispatch(action)
        store.dispatch(listDetailSlice.actions.delName(name1))
        // delListDetail({id:id1})
  }

  return (
    <>
    <ul>
      <li>{id}  {name}  
      <button onClick={() => delNameOnList(name)}>Delete</button>
      </li>
    </ul>
    </>
  )
}
export default MemberList;