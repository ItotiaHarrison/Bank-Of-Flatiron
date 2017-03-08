import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {


  render() {
    let transactions = this.props.transactions.filter((transaction) => {
      if (transaction.description.toLowerCase().includes(this.props.searchTerm.toLowerCase()) ||
          transaction.category.toLowerCase().includes(this.props.searchTerm.toLowerCase())) {
        return true
      } else {
        return false
      }
    }).map(transaction => <Transaction key={transaction.id} transaction={transaction} />)

    console.log(transactions);
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
