import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';


const DEBOUNCE_DELAY = 300;
const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryinfo = document.querySelector('.country-info');

countryInput.addEventListener('inpyt', debounce(onCountryInput, DEBOUNCE_DELAY))