import React from "react";
import Searchbox from "../Searchbox/Searchbox.component";
import Filterbox from "../Filterbox/Filterbox.component";
import "./ControlsHomepage.styles.scss";

const ControlsHomepage = ({
  handleSearchInput,
  handleFilterInput,
  searchFilter,
  regionFilter,
}) => {
  return (
    <section className='controls-homepage'>
      <Searchbox
        handleSearchInput={handleSearchInput}
        searchFilter={searchFilter}
      />
      <Filterbox
        handleFilterInput={handleFilterInput}
        regionFilter={regionFilter}
      />
    </section>
  );
};

export default ControlsHomepage;
