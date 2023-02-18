const BASE_URL = 'https://restcountries.com/?name.official&capital&population&flags.svg&languages'

export function fetchCountries(name) {
  
    return fetch(`${BASE_URL}`)
        .then(resp => {
            


                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            });

}


