import React, { Component } from 'react';

class Search extends Component {



  render() {
    return (
      <div>
        <input type="text" value={this.props.searchTerm} onChange={this.props.handleChange}/>
      </div>
    );
  }
}

export default Search
