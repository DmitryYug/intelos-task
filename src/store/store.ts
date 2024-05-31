import { createStore } from "effector";

import { getCountriesListFx, setSelectedCountry } from "@/store/events";
import type { TCountry } from "@/store/types";

export const $countriesList = createStore<TCountry[] | null>(null);
export const $countriesListLoading = createStore<boolean>(false);
export const $selectedCountry = createStore<TCountry | null>(null);
export const $dialogVisible = createStore<boolean>(false);

$countriesList.on(getCountriesListFx.doneData, (_, payload) => {
  return payload.data.map(country => ({
    name: {
      official: country.name.official,
    },
    capital: country.capital,
    population: country.population,
    region: country.region,
    currencies: country.currencies,
    flags: {
      png: country.flags.png,
      alt: country.flags.alt,
    },
    latlng: country.latlng,
  }));
});
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
$dialogVisible.on(setSelectedCountry, (_, payload) => !!payload);
$selectedCountry.on(setSelectedCountry, (_, payload) => payload);
