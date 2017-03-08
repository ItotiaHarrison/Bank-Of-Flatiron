import React, { Component } from 'react';
import Transactions from './Transactions';
import '../stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <p className="App-intro">
          Here are your most recent transactions.
        </p>
        <Transactions />
      </div>
    );
  }
}

export default App;
