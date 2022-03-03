import React from "react";
import "./Filterbox.styles.scss";

class Filterbox extends React.Component {
  constructor(props) {
    super(props);

    this.regions = [
      "All Regions",
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ];

    this.state = {
      optionsShowing: false,
    };
  }

  ariaSel = (region) => {
    const { regionFilter } = this.props;

    if (region === "All Regions" && regionFilter === "") {
      return true;
    } else if (regionFilter === region) {
      return true;
    }

    return false;
  };

  options = () => {
    return this.regions.map((region) => {
      return (
        <li
          className='option'
          key={region}
          role={"option"}
          aria-selected={this.ariaSel(region)}
          data-value={region}
        >
          {region}
        </li>
      );
    });
  };

  handleOnClickOptions = (event, handleFilterInput) => {
    const selectedOption = event.target.dataset.value;
    const selectedFilter =
      selectedOption === "All Regions" ? "" : selectedOption;
    handleFilterInput(selectedFilter);
    return;
  };

  currentFilterValue = (regionFilter) => {
    return regionFilter ? regionFilter : "Filter By Region";
  };

  handleOnClickFilterbox = () => {
    this.setState((prevState) => {
      return {
        optionsShowing: !prevState.optionsShowing,
      };
    });
  };

  setOptionsDisplay = () => {
    return this.state.optionsShowing
      ? "options-wrapper"
      : "options-wrapper hidden";
  };

  render() {
    const { handleFilterInput, regionFilter } = this.props;

    return (
      <div
        className='select'
        role={"listbox"}
        tabIndex={0}
        onClick={() => this.handleOnClickFilterbox()}
      >
        <div className='current-filter'>
          {this.currentFilterValue(regionFilter)}
        </div>
        <ul
          className={this.setOptionsDisplay()}
          role={"presentation"}
          onClick={(event) =>
            this.handleOnClickOptions(event, handleFilterInput)
          }
        >
          {this.options()}
        </ul>
      </div>
    );
  }
}

export default Filterbox;
