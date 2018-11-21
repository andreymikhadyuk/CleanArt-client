import { CITIES_OPTIONS } from 'consts';

export const getCityByValue = value => CITIES_OPTIONS.find(city => city.value === value);
