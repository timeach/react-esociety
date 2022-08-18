import React, { useContext} from "react";
// import listdata from './listdata.json'
// import { appSetStateContext } from "./AppState"
import store from "./redux/store";
import {  useAppDispatch } from "./redux/hooks";
import { listDetailSlice, delListDetail } from "./redux/listDetail/slice"

interface MemberProps {
  id: number,
  name: string
  // delNameOnList: (name) => void;
}

const MemberList : React.FC<MemberProps> = ({id, name}) => {

  const dispatch = useAppDispatch()

  const delNameOnList = (id1) => {
        // console.log(id1)
        // const action = { type:"del_name", payload: name1 };

        // store.dispatch(action)     
        dispatch(delListDetail(id1))
        // delListDetail({id:id1})
  }

  return (
    <>
    <ul>
      <li>{id}  {name}  
      <button onClick={() => delNameOnList(id)}>Delete</button>
      </li>
    </ul>
    </>
  )
}
export default MemberList;