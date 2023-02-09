import './css/styles.css'
import debounce from 'lodash.debounce'
import { fetchCountries } from './fetchCountries'
import Notiflix from 'notiflix'


const DEBOUNCE_DELAY = 300;
const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryinfo = document.querySelector('.country-info');

countryInput.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY))
function onCountryInput() {
    const nameCountry = countryInput.value.trim()
    if (nameCountry === '') {
        countryList.innerHTML = '';
        countryinfo.innerHTML = '';
        return;
    }
}