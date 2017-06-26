import React, { Component } from 'react'
import BatchesContainer from './batches/BatchesContainer'
import BatchEditor from './batches/BatchEditor'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <BatchesContainer />
        <BatchEditor />
      </div>
    );
  }
}

export default App;
