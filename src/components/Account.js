import React, { Component } from 'react';
import Transactions from './Transactions';
import Search from './Search'

class Account extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ""
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/transactions')
    .then((response) => {
       response.json().then((data) => {
         this.setState({transactions: data})
       })
    })
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    let {transactions, searchTerm} = this.state;
    console.log(searchTerm);
    return (
      <div>
        <Search searchTerm={searchTerm} handleChange={this.handleChange.bind(this)} />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions={transactions} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default Account;
