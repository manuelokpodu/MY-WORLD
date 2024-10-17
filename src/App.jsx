import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetail from "./pages/CountryDetail";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoadiing, setIsLoading] = useState(true);

  // ===================FETCHING API=====================
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();

      setAllCountries(data);
      setIsLoading(false);
    };

    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  // ==============================FILTER BY REGION LOGIC==========================================

  const filterByRegion = (region) => {
    const selectedRegion = allCountries.filter((eachCountry) => {
      return eachCountry.region === region;
    });

    console.log(selectedRegion);

    setFilteredCountries(selectedRegion);
  };

  // ===================================FILTER BY SEARCH===================================

  const filterBySearch = (input) => {
    const searchedCountry = allCountries.filter((country) => {
      return country.name.common.toLowerCase().includes(input);
    });

    setFilteredCountries(searchedCountry);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allCountries={
                  filteredCountries.length > 0
                    ? filteredCountries
                    : allCountries
                }
                filterByRegion={filterByRegion}
                filterBySearch={filterBySearch}
                isLoadiing={isLoadiing}
              />
            }
          />
          <Route path="/:countryName" element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
