import React from 'react';

const Search = ({searchTerm, handleChange}) => {
  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange}/>
    </div>
  );
}

export default Search
