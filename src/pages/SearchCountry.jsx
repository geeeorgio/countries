import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCountryByRegion } from "../service/countriesApi";
import CountryList from "../components/CountryList/CountryList";

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const query = searchParams.get("origin");

    if (!query) return;

    const fetchCountryByRegion = async () => {
      const res = await getCountryByRegion(query);
      setCountries(res);
    };

    fetchCountryByRegion();
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = e.target.elements.searchCountry.value;
    setSearchParams({ origin: value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchCountry" />
        <button type="submit">Search</button>
      </form>
      <CountryList countries={countries} />
    </>
  );
};

export default SearchCountry;
