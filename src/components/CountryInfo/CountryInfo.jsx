const CountryInfo = ({ country }) => {
  return (
    <div>
      <img src={country.flag} alt={country.alt} />
      <p>Country: {country.name}</p>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryInfo;
