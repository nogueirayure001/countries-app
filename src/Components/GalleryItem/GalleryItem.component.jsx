import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

import "./GalleryItem.styles.scss";

const GalleryItem = ({ country, history, lightTheme }) => {
  return (
    <div
      className={
        lightTheme ? "gallery-item-wrapper" : "gallery-item-wrapper dark"
      }
      onClick={() => history.push(`/countries/${country.name}`)}
    >
      <div
        className='flag'
        style={{ backgroundImage: `url(${country.flags.svg})` }}
      ></div>
      <div className='info'>
        <h2 className='country-name'>{country.name}</h2>
        <ul className='country-info'>
          <li>
            <span className='topic'>Population:</span> {country.population}
          </li>
          <li>
            <span className='topic'>Region:</span> {country.region}
          </li>
          <li>
            <span className='topic'>Capital:</span> {country.capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(GalleryItem);
