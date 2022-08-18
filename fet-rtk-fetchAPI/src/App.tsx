import React, { useState, useEffect, useContext } from 'react';

import './App.css';
import MemberList from './MemberList'
import listdata from './listdata.json'
// import { appContext } from "./AppState"

interface Props {
}

interface State {
  // list: any[]
}

const App: React.FC<Props> = (props) => {
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const responses = await fetch("http://112.74.46.211:8070/People")
  //     // .then(response => response.json())
  //     // .then(data => setRobotGallery(data))
  //     const data = await responses.json();
  //     setList(data);
  //   };
  //   fetchData();
  // }, [])

//   const list =  [ 
//     { "id": 1, "name": "Kate" },
//     { "id": 2, "name": "Ellen" }
//     ]

    // const value = useContext(appContext)

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        This test is to build a front end for the E Society's member registry.<br></br>

        The E Society is a group that only allows members with an E in their name.
        </p>
        <h3>1. Show a list of the current members<br></br>
        2. Allow new members to be added<br></br>
        3. Allow members to be deleted<br></br>
        4. Validate that users being added have an 'e' or 'E' in their name.</h3>
        
        <h3>Member List</h3>
        {/* {value.list.items.map((r) => (<MemberList id={r.id} name={r.name}/>))} */}

        <h3>Add New Member</h3>
        <input placeholder='please input name here'/>
        <button>Submit</button>

        <h3>Delete Member</h3>
        <input placeholder='input name here'/>
        <button>Submit</button>

      </header>
    </div>
  );
}

export default App;
