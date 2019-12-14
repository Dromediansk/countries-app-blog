export const getAllCountries = async () => {
  try {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`);
    const responseCountries = await response.json();
    return responseCountries;
  } catch (err) {
    console.log(err);
  }
};
