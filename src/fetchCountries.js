const BASE_URL = 'https://restcountries.com/v3.1/'

export function fetchCountries(name) {
  
    return fetch(`${BASE_URL}`)
        .then(resp => {
            


                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                return resp.json();
            });

}

// ?name.official&capital&population&flags.svg&languages