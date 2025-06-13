export const transformCountries = (arr = []) => {
  return arr.map(({ name: { common }, flags: { png, alt } }) => ({
    id: common,
    country: common,
    flag: png,
    alt,
  }));
};
