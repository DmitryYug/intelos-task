import { combine, createStore } from "effector";

import { getCountriesListFx } from "@/store/events";
import type { TCountry } from "@/store/types";

const $countriesList = createStore<TCountry[] | null>(null);
const $countriesListLoading = createStore<boolean>(false);

$countriesList.on(getCountriesListFx.doneData, (_, payload) => payload.data);
$countriesListLoading.on(getCountriesListFx.pending, (state, payload) => payload);

export const $appStore = combine({
  countriesList: $countriesList,
  countriesListLoading: $countriesListLoading,
});
