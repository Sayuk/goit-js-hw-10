const BASE_URL = 'https://restcountries.com/v3.1/name/'
const fields = 'fields=name,capital,population,flags,languages'
export async function fetchCountries(name) {
  
    const resp = await fetch(`${BASE_URL}${name}?${fields}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return await resp.json();

}
