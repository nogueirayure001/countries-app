import React from "react";
import PageHeader from "../../Components/Pageheader/Pageheader.component";
import CountryInfo from "../../Components/CountryInfo/CountryInfo.component";
import ControlsCountryInfo from "../../Components/ControlsCountryInfo/ControlsCountryInfo.component";

const Countrypage = ({ countries }) => {
  return (
    <div>
      <PageHeader />
      <ControlsCountryInfo />
      <CountryInfo countries={countries} />
    </div>
  );
};

export default Countrypage;
