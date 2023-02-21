const BASE_URL = 'https://restcountries.com/'
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


