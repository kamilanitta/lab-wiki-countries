import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route exact path="/countries" component={CountriesList} />
        <Route path="/countries/:id" component={CountryDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
