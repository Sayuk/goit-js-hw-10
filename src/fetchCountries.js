const BASE_URL = 'https://restcountries.com/v3.1/{name}?name.official&capital&population&flags.svg&languages'

export function fetchCountries(name) {
  
    return fetch(`${BASE_URL}`)
        .then(resp => {
            


                if (!resp === 202) {
                    throw new Error(resp.status);
                }
                return resp.json();
            });

}

