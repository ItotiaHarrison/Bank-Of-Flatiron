import React, { Component } from 'react'
import Transactions from './Transactions'
import Search from './Search'

// The data you retrieve from the Rails API will be structured as follows:
// [
//   {
//     id: 1,
//     posted_at: "2017-02-28 11:00:00",
//     description: "Leather Pants, Gap co.",
//     category: "Fashion",
//     amount: -20000
//   },
//   {
//     id: 2,
//     posted_at: "2017-02-29 10:30:00",
//     description: "Paycheck from Bob's Burgers",
//     category: "Income",
//     amount: 100000
//   }
// ]
// You can use this dummy data to get the app up and running if you are
// unable to make the API call

class Account extends Component {


  handleChange(event) {
    //... your code here
  }

  render() {

    return (
      <div>
        <Search searchTerm={""} handleChange={"...your code here"} />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions={[]} searchTerm={""} />
      </div>
    )
  }
}

export default Account
