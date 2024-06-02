import { createStore } from "effector";

import {
  getCountriesListFilteredFx,
  getCountriesListFx,
  setInitialCountiesList,
  setSelectedCountry,
} from "@/store/events";
import type { TCountry } from "@/store/types";
import { countriesListMapper } from "@/utils/countriesListMapper";

// Stores with full countries list and filtered by API list
export const $countriesList = createStore<TCountry[] | null>(null);
export const $filteredCountriesList = createStore<TCountry[] | null>(null);

// Loading states
export const $countriesListLoading = createStore<boolean>(false);
export const $filteredCountriesListLoading = createStore<boolean>(false);
export const $selectedCountry = createStore<TCountry | null>(null);
export const $dialogVisible = createStore<boolean>(false);

// Store when no results are found or an error occurs
export const $noResults = createStore<boolean>(false);

// Store subscriptions
$countriesList.on(getCountriesListFx.doneData, (_, payload) => countriesListMapper(payload.data));
$filteredCountriesList
  .on(getCountriesListFilteredFx.doneData, (_, payload) => countriesListMapper(payload.data))
  // Setting the filteredList to null when the search value is empty
  .on(setInitialCountiesList, () => null);
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
$filteredCountriesListLoading.on(getCountriesListFilteredFx.pending, (_, payload) => payload);
$dialogVisible.on(setSelectedCountry, (_, payload) => !!payload);

// Store for dialog map, setting the selected country
$selectedCountry.on(setSelectedCountry, (_, payload) => payload);
$noResults
  .on(getCountriesListFilteredFx.fail, () => true)
  // Resetting the noResults state when the search value is empty or filtered list loaded successfully
  .on([setInitialCountiesList, getCountriesListFilteredFx.doneData], () => false);
