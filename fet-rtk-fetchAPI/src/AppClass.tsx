import React from "react";
import './App.css';
import MemberList from './MemberList'
import store from "./redux/store"
import { listDetailSlice} from "./redux/listDetail/slice"

interface Props {}

interface State {
  value1: string;
  value2: string;
  list: {id: number, name: string}[] 
}

class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    const storeState = store.getState();
    this.state = {
      value1: storeState.value1,
      value2: storeState.value2,
      list: storeState.list }
    store.subscribe(this.handleStoreChange)

    this.handleChange1 = this.handleChange1.bind(this)
    this.handleChange2 = this.handleChange2.bind(this)
    this.handleAddName = this.handleAddName.bind(this)
    this.handleDelName = this.handleDelName.bind(this)
  };

  componentDidMount() {
    // store.dispatch(getListDetail())
    fetch("https://localhost:7073/People")
    .then((response) => response.json())
    .then((data) => store.dispatch(listDetailSlice.actions.fetchDone(data)))
  }

  handleStoreChange = () => {
    const storeState = store.getState();
    this.setState({list: storeState.list})
  };


  handleChange1(event){
    this.setState({value1: event.target.value})
  }

  handleChange2(event){
    this.setState({value2: event.target.value})
  }

  handleAddName(){
    // const action = { type:"add_name", payload: this.state.value1 };
    // store.dispatch(action)
    store.dispatch(listDetailSlice.actions.addName(this.state.value1))
  }

  handleDelName(){
    // const action = {type:"del_name", payload: this.state.value2 }
    // store.dispatch(action)
    store.dispatch(listDetailSlice.actions.delName(this.state.value2))
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
        This test is to build a front end for the E Society's member registry.<br></br>

        The E Society is a group that only allows members with an E in their name.
        </p>

        <h3>Member List</h3>
        {this.state.list.map((r) => (<MemberList id={r.id} name={r.name}/>))}

        <h3>Add New Member</h3>
        <input placeholder='please input name here' 
          value={this.state.value1}
          onChange={this.handleChange1} 
        />
        <button onClick={this.handleAddName}>Submit</button>

        <h3>Delete Member</h3>
        <input placeholder='input name here'
        value={this.state.value2}
        onChange={this.handleChange2}
        />
        <button onClick={this.handleDelName}>Submit</button>

      </header>
    </div>
    )
  }
}

export default App;