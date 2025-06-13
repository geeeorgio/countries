import { useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getCountryById } from "../service/countriesApi";
import CountryInfo from "../components/CountryInfo/CountryInfo";
import { useState } from "react";

const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState({});
  const location = useLocation();

  useEffect(() => {
    const fetchCoutryById = async () => {
      const data = await getCountryById(countryId);
      setCountry(data);
    };

    fetchCoutryById();
  }, [countryId]);

  return (
    <div>
      <Link to={location.state || "/"}>Go back</Link>
      <CountryInfo country={country} />
    </div>
  );
};

export default Country;
