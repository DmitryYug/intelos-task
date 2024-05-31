import { createStore } from "effector";

import { getCountriesListFx } from "@/store/events";
import type { TCountry } from "@/store/types";

export const $countriesList = createStore<TCountry[] | null>(null);
export const $countriesListLoading = createStore<boolean>(false);

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
  }));
});
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
