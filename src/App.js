import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage.component";
import Countrypage from "./Pages/Countrypage/Countrypage.component";

class App extends React.Component {
  #baseUrl;

  constructor() {
    super();

    this.#baseUrl = "https://restcountries.com/v2";

    this.state = {
      dataFetched: false,
      countries: [],
      searchFilter: "",
      regionFilter: "",
      lightTheme: JSON.parse(localStorage.getItem("theme"))
        ? JSON.parse(localStorage.getItem("theme")).lightTheme
        : true,
    };
  }

  componentDidMount() {
    fetch(`${this.#baseUrl}/all`)
      .then((response) => response.json())
      .then((countries) => {
        this.setState({ countries: countries, dataFetched: true });
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

  handleThemeToggle = () => {
    this.setState((prevState) => {
      const newState = { lightTheme: !prevState.lightTheme };
      localStorage.setItem("theme", JSON.stringify(newState));
      return newState;
    });
  };
  render() {
    return (
      <Switch>
        <Route exact path={"/"}>
          <Homepage
            dataFetched={this.state.dataFetched}
            countries={this.filterCountries()}
            searchFilter={this.state.searchFilter}
            regionFilter={this.state.regionFilter}
            handleSearchInput={this.handleSearchInput}
            handleFilterInput={this.handleFilterInput}
            lightTheme={this.state.lightTheme}
            handleThemeToggle={this.handleThemeToggle}
          />
        </Route>

        <Route path={"/countries/:countryId"}>
          <Countrypage
            countries={this.state.countries}
            lightTheme={this.state.lightTheme}
            handleThemeToggle={this.handleThemeToggle}
          />
        </Route>
      </Switch>
    );
  }
}

export default App;
