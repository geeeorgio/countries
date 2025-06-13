import axios from "axios";
import { transformCountries } from "../helpers/transformCountries";

axios.defaults.baseURL = "https://restcountries.com/v3.1";

export const getCountries = async () => {
  const { data } = await axios.get("/region/europe");
  return transformCountries(data);
};

export const getCountryById = async (id) => {
  const { data } = await axios.get(`/name/${id}`);

  const {
    name: { common },
    flags: { png, alt },
    population,
    capital,
  } = data[0];

  return { name: common, flag: png, population, alt, capital };
};

export const getCountryByRegion = async (country) => {
  const { data } = await axios.get(`/region/${country}`);
  return transformCountries(data);
};
