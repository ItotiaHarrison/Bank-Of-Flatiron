import React, { Component } from 'react';
import Transaction from './Transaction'

class Transactions extends Component {
  constructor() {
    super()
    this.matchesDescription = this.matchesDescription.bind(this)
    this.matchesCategory = this.matchesCategory.bind(this)
  }

  matchesDescription(transaction) {
    return transaction.description.toLowerCase().includes(this.props.searchTerm.toLowerCase())
  }

  matchesCategory(transaction) {
    return transaction.category.toLowerCase().includes(this.props.searchTerm.toLowerCase())
  }

  render() {
    let transactions = this.props.transactions.filter((transaction) => {
      return this.matchesDescription(transaction) || this.matchesCategory(transaction) 
    })
    .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)

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
