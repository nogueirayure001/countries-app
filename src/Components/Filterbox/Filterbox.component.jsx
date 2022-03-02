import React from "react";

const Filterbox = ({ handleFilterInput, regionFilter }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const options = regions.map((region) => {
    return (
      <option key={region} value={region}>
        {region}
      </option>
    );
  });

  return (
    <div>
      <select
        defaultValue={regionFilter}
        onChange={(event) => handleFilterInput(event.target.value)}
      >
        <option value=''>Filter by Region</option>
        {options}
      </select>
    </div>
  );
};

export default Filterbox;
