import React from 'react';
import countries from '../countries.json';

class CountriesDetails extends React.Component {
  state = {
    name: '',
    capital: '',
    area: 0,
    borders: '',
  };

  searchCountry = () => {
    if (!this.state.name) {
      const findCountry = countries.find((country) => {
        return country.cca3 === this.props.match.params.id;
      });

      if (findCountry) {
        this.setState({ ...findCountry });
      }
    }
  };

  render() {
    console.log(this.props);
    this.searchCountry();
    return (
      <div className="container mt-5">
        <h1>{this.state.name.common}</h1>
        <div>
          <table className="table table-borderless tableInfo">
            <tbody>
              <tr>
                <th scope="row">Capital </th>
                <td>{this.state.capital} </td>
              </tr>
              <tr>
                <th scope="row">Area </th>
                <td>{this.state.area} kms2</td>
              </tr>
              <tr>
                <th scope="row">Borders </th>
                <td>{this.state.borders} </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CountriesDetails;
