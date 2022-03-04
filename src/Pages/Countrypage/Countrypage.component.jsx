import React from "react";
import PageHeader from "../../Components/Pageheader/Pageheader.component";
import CountryInfo from "../../Components/CountryInfo/CountryInfo.component";
import ControlsCountryInfo from "../../Components/ControlsCountryInfo/ControlsCountryInfo.component";
import Loading from "../../Components/Loading/Loading.component";
import "./Countrypage.styles.scss";

const Countrypage = ({ countries, lightTheme, handleThemeToggle }) => {
  return countries.length > 0 ? (
    <div className={lightTheme ? "countrypage" : "countrypage dark"}>
      <PageHeader
        lightTheme={lightTheme}
        handleThemeToggle={handleThemeToggle}
      />
      <ControlsCountryInfo lightTheme={lightTheme} />
      <CountryInfo countries={countries} lightTheme={lightTheme} />
    </div>
  ) : (
    <Loading />
  );
};

export default Countrypage;
