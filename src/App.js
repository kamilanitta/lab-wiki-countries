import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import Navbar from './Components/Navbar';
import countries from './countries.json';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <CountriesList countries={countries} />
        <Route exact path="/countries" component={CountryDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
