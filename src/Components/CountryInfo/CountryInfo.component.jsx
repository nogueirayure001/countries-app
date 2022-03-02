import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import ButtonLink from "../ButtonLink/ButtonLink.component";
import "./CountryInfo.styles.scss";

const CountryInfo = ({ countries, match, history }) => {
  // const baseUrl = "https://restcountries.com/v2";

  let country = null;
  let bordersCode = [];
  const borders = [];

  for (const cntr of countries) {
    if (cntr.name === match.params.countryId) {
      country = cntr;

      if (country.borders) {
        bordersCode = country.borders;
      }

      break;
    }
  }

  for (const cntr of countries) {
    if (bordersCode.includes(cntr.alpha3Code)) {
      borders.push(cntr);
    }
  }

  const countryBorders = borders.map((country) => {
    return (
      <li key={country.alpha3Code}>
        <ButtonLink identifier={country.name} />
      </li>
    );
  });

  if (countries.length !== 0) {
    return (
      <main className='countryinfo-wrapper'>
        <div
          className='flag'
          style={{ backgroundImage: `url(${country.flag})` }}
        ></div>
        <section className='info'>
          <h2 className='country-name'>{country.name}</h2>

          <ul className='country-info'>
            <li>
              <p>
                <span className='topic'>Native Name:</span> {country.nativeName}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Population:</span> {country.population}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Region:</span> {country.region}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Sub Region:</span> {country.subregion}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Capital:</span> {country.capital}
              </p>
            </li>
          </ul>

          <ul className='country-info'>
            <li>
              <p>
                <span className='topic'>Top Level Domain:</span>{" "}
                {country.topLevelDomain}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Currencies:</span>{" "}
                {country.currencies.map((currency) => currency.name)}
              </p>
            </li>
            <li>
              <p>
                <span className='topic'>Languages:</span>{" "}
                {country.languages.map((lang, index) => {
                  if (country.languages.length > index + 1) {
                    return `${lang.name}, `;
                  }
                  return lang.name;
                })}
              </p>
            </li>
          </ul>

          <nav className='borders-navigation'>
            <h3 className='borders-title'>Border Countries</h3>

            <ul className='borders-links'>{countryBorders}</ul>
          </nav>
        </section>
      </main>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

export default withRouter(CountryInfo);
