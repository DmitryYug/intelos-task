import { createStore } from "effector";

import {
  getCountriesListFilteredFx,
  getCountriesListFx,
  setInitialCountiesList,
  setSelectedCountry,
} from "@/store/events";
import type { TCountry } from "@/store/types";
import { countriesListMapper } from "@/utils/countriesListMapper";

export const $countriesList = createStore<TCountry[] | null>(null);
export const $filteredCountriesList = createStore<TCountry[] | null>(null);
export const $countriesListLoading = createStore<boolean>(false);
export const $filteredCountriesListLoading = createStore<boolean>(false);
export const $selectedCountry = createStore<TCountry | null>(null);
export const $dialogVisible = createStore<boolean>(false);
export const $noResults = createStore<boolean>(false);

$countriesList.on(getCountriesListFx.doneData, (_, payload) => countriesListMapper(payload.data));
$filteredCountriesList
  .on(getCountriesListFilteredFx.doneData, (_, payload) => countriesListMapper(payload.data))
  .on(setInitialCountiesList, () => null);
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
$filteredCountriesListLoading.on(getCountriesListFilteredFx.pending, (_, payload) => payload);
$dialogVisible.on(setSelectedCountry, (_, payload) => !!payload);
$selectedCountry.on(setSelectedCountry, (_, payload) => payload);
$noResults
  .on(getCountriesListFilteredFx.fail, () => true)
  .on([setInitialCountiesList, getCountriesListFilteredFx.doneData], () => false);
