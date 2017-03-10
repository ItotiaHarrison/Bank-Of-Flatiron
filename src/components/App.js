import React, { Component } from 'react'
import Account from './Account'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Royal Bank of Flatiron</h2>
        </div>

        <Account />

      </div>
    )
  }
}

export default App
