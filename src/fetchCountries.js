const BASE_URL = 'https://restcountries.com/name/'

// export function fetchCountries(name) {
  
//     return fetch(`${BASE_URL}`)
//         .then(resp => {
            


//                 if (!resp.ok) {
//                     throw new Error(resp.statusText);
//                 }
//                 return resp.json();
//             });

// }

const fields = 'fields=name,capital,population,flags,languages'
export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${fields}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}
// ?name.official&capital&population&flags.svg&languages'