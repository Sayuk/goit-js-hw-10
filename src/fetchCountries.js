const BASE_URL = 'https://restcountries.com/v3.1/?name.official&capital&population&flags.svg&languages'
const fields = 'fields=name,capital,population,flags,languages'
export function fetchCountries(name) {
  
    return fetchCountries(`${BASE_URL}`)
        .then(resp => {
            


                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            });

}
