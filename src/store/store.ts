import { createStore } from "effector";

import { getCountriesListFilteredFx, getCountriesListFx, setSelectedCountry } from "@/store/events";
import type { TCountry } from "@/store/types";
import { countriesListMapper } from "@/utils/countriesListMapper";

export const $countriesList = createStore<TCountry[] | null>(null);
export const $countriesListLoading = createStore<boolean>(false);
export const $selectedCountry = createStore<TCountry | null>(null);
export const $dialogVisible = createStore<boolean>(false);

$countriesList
  .on(getCountriesListFx.doneData, (_, payload) => countriesListMapper(payload.data))
  .on(getCountriesListFilteredFx.doneData, (_, payload) => countriesListMapper(payload.data));
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
$dialogVisible.on(setSelectedCountry, (_, payload) => !!payload);
$selectedCountry.on(setSelectedCountry, (_, payload) => payload);
