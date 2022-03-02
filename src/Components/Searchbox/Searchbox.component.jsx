import React from "react";
import "./Searchbox.styles.scss";

const Searchbox = ({ handleSearchInput, searchFilter }) => {
  return (
    <div className='searchbox-wrapper'>
      <label for='searchbox' className='search-icon'></label>
      <input
        id='searchbox'
        className='searchbox'
        type='search'
        placeholder='Search for a country...'
        autoComplete='off'
        value={searchFilter}
        onInput={(event) => handleSearchInput(event.target.value)}
      />
    </div>
  );
};

export default Searchbox;
