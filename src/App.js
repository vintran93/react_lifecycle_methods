import React, { Component } from 'react';
import './App.css';
import Name from './Name';

class App extends Component {
  
  // constructor(){
  //   super()
  //   this.state = {
  //     name: 'Vincent'
  //   }
  // }
  state = {
    name: 'Vincent'
  }
  
  render(){
    // console.log('Render App')
    return (
      <div className="App">
        <h2>{this.state.name}</h2>
        <Name />
      </div>
    );
  }
  
  
}

export default App;
