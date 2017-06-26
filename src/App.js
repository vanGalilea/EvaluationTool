import React, { Component } from 'react'
import BatchesContainer from './BatchesContainer'
import './App.css'

const batches = [
  {
    number: 1,
    startDate: 150117,
    endDate: 150117,
    students: ["student1", "student2"],
  },
  {
    number: 2,
    startDate: 150117,
    endDate:  150117,
    students: ["student3", "student4"],
  },
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <BatchesContainer batches={ batches } />
      </div>
    );
  }
}

export default App;
