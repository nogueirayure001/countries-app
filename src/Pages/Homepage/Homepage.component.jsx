import React from "react";
import "./Homepage.styles.scss";
import PageHeader from "../../Components/Pageheader/Pageheader.component";
import ControlsHomepage from "../../Components/ControlsHomepage/ControlsHomepage.component";
import Gallery from "../../Components/Gallery/Gallery.component";
import Loading from "../../Components/Loading/Loading.component";

const Homepage = ({
  countries,
  searchFilter,
  regionFilter,
  handleSearchInput,
  handleFilterInput,
  lightTheme,
  handleThemeToggle,
}) => {
  return countries.length > 0 ? (
    <div className={lightTheme ? "homepage" : "homepage dark"}>
      <PageHeader
        lightTheme={lightTheme}
        handleThemeToggle={handleThemeToggle}
      />
      <ControlsHomepage
        handleSearchInput={handleSearchInput}
        handleFilterInput={handleFilterInput}
        searchFilter={searchFilter}
        regionFilter={regionFilter}
        lightTheme={lightTheme}
      />
      <Gallery countries={countries} lightTheme={lightTheme} />
    </div>
  ) : (
    <Loading />
  );
};

export default Homepage;
