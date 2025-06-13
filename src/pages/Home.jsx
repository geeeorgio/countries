import { useEffect, useState } from "react";
import { getCountries } from "../service/countriesApi";
import CountryList from "../components/CountryList/CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesList = await getCountries();
      setCountries(countriesList);
    };

    fetchCountries();
  }, []);

  return (
    <div>
      <CountryList countries={countries} />
    </div>
  );
};

export default Home;
