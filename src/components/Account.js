import React, { Component } from 'react';
import Transactions from './Transactions';
import Search from './Search'

class Account extends Component {
  constructor() {
    super()
    this.state = {transactions: []}
  }

  componentDidMount() {
    fetch('http://localhost:3001/transactions')
    .then((response) => {
       response.json().then((data) => {
         this.setState({transactions: data})
       })
    })
  }

  render() {
    let {transactions, searchTerm} = this.state;
    return (
      <div>
        <Search />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions={transactions} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default Account;
