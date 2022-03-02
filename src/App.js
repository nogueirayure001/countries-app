import { Route, Switch } from "react-router-dom";
import React from "react";

import "./App.css";

import Homepage from "./Pages/Homepage/Homepage.component";
import Countrypage from "./Pages/Countrypage/Countrypage.component";

class App extends React.Component {
  #baseUrl;

  constructor() {
    super();

    this.#baseUrl = "https://restcountries.com/v2";

    this.state = {
      countries: [],
      searchFilter: "",
      regionFilter: "",
      lightTheme: true,
    };
  }

  componentDidMount() {
    fetch(`${this.#baseUrl}/all`)
      .then((response) => response.json())
      .then((countries) => {
        this.setState({ countries: countries });
      });
  }

  filterCountries = () => {
    return this.state.countries.filter((country) => {
      let includesSearchFilter = country.name
        .toLowerCase()
        .includes(this.state.searchFilter.toLowerCase());

      let includesRegionFilter = country.region === this.state.regionFilter;

      if (this.state.regionFilter) {
        return includesSearchFilter && includesRegionFilter ? true : false;
      }

      return includesSearchFilter;
    });
  };

  handleSearchInput = (newFilter) => {
    this.setState({ searchFilter: newFilter });
  };

  handleFilterInput = (region) => {
    this.setState({ regionFilter: region });
  };

  render() {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Homepage
            countries={this.filterCountries()}
            lightTheme={this.state.lightTheme}
            searchFilter={this.state.searchFilter}
            regionFilter={this.state.regionFilter}
            handleSearchInput={this.handleSearchInput}
            handleFilterInput={this.handleFilterInput}
          />
        </Route>

        <Route path={"/countries/:countryId"}>
          <Countrypage countries={this.state.countries} />
        </Route>
      </Switch>
    );
  }
}

export default App;
