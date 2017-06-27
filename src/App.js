import React, { Component } from 'react'
import BatchesContainer from './batches/BatchesContainer'
import BatchEditor from './batches/BatchEditor'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import muiTheme from './assets/styles/theme'
// import PropTypes from 'prop-types'
import './App.css'

class App extends Component {
  // static childContextTypes = {
  //   muiTheme: PropTypes.object.isRequired,
  // }

  // getChildContext() {
  //   return { muiTheme }
  // }

  render() {
    return (
      <div className="App">
        <BatchesContainer />
        <BatchEditor />
      </div>
    )
  }
}

export default App;
