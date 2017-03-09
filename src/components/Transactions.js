import React, { Component } from 'react';
// Leave for student TODO: import other file
// import Transaction from './Transaction'

class Transactions extends Component {
  // constructor() {
  //   super()
  //   this.matchesDescription = this.matchesDescription.bind(this)
  //   this.matchesCategory = this.matchesCategory.bind(this)
  // }
  //
  // matchesDescription(transaction) {
  //   return transaction.description.toLowerCase().includes(this.props.searchTerm.toLowerCase())
  // }
  //
  // matchesCategory(transaction) {
  //   return transaction.category.toLowerCase().includes(this.props.searchTerm.toLowerCase())
  // }

  render() {
    // Leave for student TODO: basically they should build out the whole logic here
    // maybe give them the variable declaration ("let filteredTransactions")
    // and they do the rest, leave all code

    // let filteredTransactions = this.props.transactions.filter((transaction) => {
    //   return this.matchesDescription(transaction) || this.matchesCategory(transaction)
    // })
    // .map(transaction => <Transaction key={transaction.id} transaction={transaction} />)

    return(
    <table>
      <tbody>
        <tr>
          <th>Posted At</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        { filteredTransactions }
      </tbody>
    </table>
    )
  }
}

export default Transactions
