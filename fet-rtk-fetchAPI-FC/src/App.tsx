import React, { useState, useEffect, useContext } from 'react';

import './App.css';
import MemberList from './MemberList';
// import { appContext } from "./AppState"
import { useSelector } from "./redux/hooks";
import { useDispatch } from "react-redux"
import { listDetailSlice } from "./redux/listDetail/slice"


interface Props {
}

interface State {
  value1: string;
  value2: string;
  list: {id: number, name: string}[] 
}

const App: React.FC<Props> = (props) => {

  const list = useSelector((state) => state.list)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    fetch("https://localhost:7073/People")
    .then((response) => response.json())
    .then((data) => dispatch(listDetailSlice.actions.fetchDone(data)))
  }, [])

  const [value1, setValue1] = useState<string>('')
  const [value2, setValue2] = useState<string>('')

  const handelChange1 = (event) => {
    // console.log(event)
      setValue1(event.target.value)
  }

  const handelChange2 = (event) => {
    setValue2(event.target.value)
}
    // const value = useContext(appContext)

  return (
    <div className="App">
      <header className="App-header">
        <p>
        This test is to build a front end for the E Society's member registry.<br></br>

        The E Society is a group that only allows members with an E in their name.
        </p>
        
        <h3>Member List</h3>
        {list.map((r) => (<MemberList id={r.id} name={r.name}/>))}

        <h3>Add New Member</h3>
        <input placeholder='please input name here'
          value={value1}
          onChange={handelChange1}
          // onChange={() => {setValue1(event.target.value)}}
        />
        <button
        onClick={() => {dispatch(listDetailSlice.actions.addName(value1))}}
        >Submit</button>

        <h3>Delete Member</h3>
        <input placeholder='input name here'
          value={value2}
          onChange={handelChange2}
        />
        <button
        onClick={() => {dispatch(listDetailSlice.actions.delName(value2))}}
        >Submit</button>

      </header>
    </div>
  );
}

export default App;
