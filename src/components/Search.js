import React from 'react';

const Search = (props) => {
  // Leave for Student TODO: add the 'onChange' handler
  // and use the handleChange prop
  // "onChange={handleChange}"
  return (
    <div>
      <input type="text" value={props.searchTerm} />
    </div>
  );
}

export default Search
