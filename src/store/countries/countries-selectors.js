export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, {search = '', region = ''}) =>
  state.countries.list.filter(
    (countrie) =>
      countrie.name.toLowerCase().includes(search.toLowerCase()) &&
      countrie.region.includes(region),
  );
