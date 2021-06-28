import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
  state = {
    countries: [...countries],
  };
  render() {
    return (
      <div className="container">
        <div className="column">
          {this.state.countries.map((countries) => {
            return (
              <div className="col-4" key={countries.cca3}>
                <div className="listGroup">
                  <Link
                    to={`/countries/${countries.cca3}`}
                    className="list-group-item list-group-item-action countryBox"
                  >
                    {countries.flag} {countries.name.common}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CountriesList;
