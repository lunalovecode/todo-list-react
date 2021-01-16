import React, { Component } from 'react';
import './App.css';
import Person from './TodoReactStuff/Person';

class App extends Component {
  render() {
    const style = {
      backgroundColor: 'blue'
    };
    return (
      <div className="App">
        <h1 style={style}>My TODOs</h1>
        <div>
          <span>Item count: <span id="item-count">0</span></span>
          <span>Unchecked count: <span id="item-count">0</span></span>
        </div><br />
        <div id="create-todo" className="center">
          <input placeholder="Enter New TODO"></input><br /><br />
          <button>Add New TODO</button>
          </div>
          <Person />
          <Person />
          <Person />
          <ul id="todo-list"></ul>
        </div>
    );
  }
}

export default App;
