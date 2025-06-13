import { Link, useLocation } from "react-router-dom";
import s from "./CountryList.module.css";

const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {countries.map(({ id, country, flag, alt }) => (
        <li key={id}>
          <Link to={`/country/${id}`} state={location}>
            <img src={flag} alt={alt} />
            <h3>{country}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
