import React from "react";
import Searchbox from "../Searchbox/Searchbox.component";
import Filterbox from "../Filterbox/Filterbox.component";
import "./ControlsHomepage.styles.scss";

const ControlsHomepage = ({
  handleSearchInput,
  handleFilterInput,
  searchFilter,
  regionFilter,
  lightTheme,
}) => {
  return (
    <section className='controls-homepage'>
      <Searchbox
        handleSearchInput={handleSearchInput}
        searchFilter={searchFilter}
        lightTheme={lightTheme}
      />
      <Filterbox
        handleFilterInput={handleFilterInput}
        regionFilter={regionFilter}
        lightTheme={lightTheme}
      />
    </section>
  );
};

export default ControlsHomepage;
