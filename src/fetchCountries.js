const BASE_URL = 'https://restcountries.com/v3.1/name/'
const fields ='name.official,capital,population,flags.svg,languages'

export function fetchCountries(name) {
  
    return fetch(`${BASE_URL}${name}?${fields}`)
        .then(resp => {
            


                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            });

}


