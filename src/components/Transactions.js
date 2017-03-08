import React, { Component } from 'react';

class Transactions extends Component {
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
    let transactions = this.state.transactions.map((transaction) => (
      <tr key={transaction.id}>
        <td>{transaction.posted_at}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
      </tr>
    ))
    return(
    <table>
      <tbody>
        <tr>
          <th>Posted At</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        { transactions }
      </tbody>
    </table>
    )
  }
}

export default Transactions
