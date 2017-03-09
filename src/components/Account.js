import React, { Component } from 'react';
import Transactions from './Transactions';
import Search from './Search'

class Account extends Component {
  constructor() {
    super()

    // ** Leave for Student TODO: set an initial state,
    // bind this
    //
    // this.state = {
    //   transactions: [],
    //   searchTerm: ""
    // };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // ** Leave for Student TODO: Make the AJAX Call
    // ** Question: do we define the lifecycle method??
    //
    // fetch('http://localhost:3001/transactions')
    // .then((response) => {
    //    response.json().then((data) => {
    //      this.setState({transactions: data})
    //    })
    // })
  }

  handleChange(event) {
    // ** Leave for Student TODO: use setState
    //
    // this.setState({
    //   searchTerm: event.target.value
    // })
  }

  render() {
    // Leave for student TODO: make them fill in the props to pass down
    // let {transactions, searchTerm} = this.state;

    return (
      <div>
        <Search searchTerm={...your code here} handleChange={...your code here} />
        <p className="App-intro">
          Here are your most recent transactions.
        </p>

        <Transactions transactions searchTerm={...your code here} />
      </div>
    )
  }
}

export default Account;
