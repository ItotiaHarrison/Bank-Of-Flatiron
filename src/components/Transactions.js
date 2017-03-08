import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {


  render() {
    let transactions = this.props.transactions.map((transaction) => (
      <Transaction transaction={transaction} />
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
