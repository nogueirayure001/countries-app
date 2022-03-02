import React from "react";
import "./Homepage.styles.scss";

import PageHeader from "../../Components/Pageheader/Pageheader.component";
import ControlsHomepage from "../../Components/ControlsHomepage/ControlsHomepage.component";
import Gallery from "../../Components/Gallery/Gallery.component";

const Homepage = ({
  countries,
  lightTheme,
  searchFilter,
  regionFilter,
  handleSearchInput,
  handleFilterInput,
}) => {
  return (
    <div>
      <PageHeader />
      <ControlsHomepage
        handleSearchInput={handleSearchInput}
        handleFilterInput={handleFilterInput}
        searchFilter={searchFilter}
        regionFilter={regionFilter}
      />
      <Gallery countries={countries} />
    </div>
  );
};

export default Homepage;
