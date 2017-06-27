import React, { Component } from 'react'
import Loading from './loading'
import LoadErrorMessage from './loadErrorMessage'
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
        <LoadErrorMessage />
        <Loading />
        { this.props.children }
      </div>
    )
  }
}

export default App;
