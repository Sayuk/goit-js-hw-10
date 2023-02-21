const BASE_URL = 'https://restcountries.com/?name.official&capital&population&flags.svg&languages'
const key ='fields=name,capital,population,flags,languages'

export function fetchCountries(name) {
  
    return fetch(`${BASE_URL}${name}?${fields}`)
        .then(resp => {
            


                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            });

}


