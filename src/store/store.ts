import { createStore } from "effector";

import { getCountriesListFx } from "@/store/events";
import type { TCountry } from "@/store/types";

export const $countriesList = createStore<TCountry[] | null>(null);
export const $countriesListLoading = createStore<boolean>(false);

$countriesList.on(getCountriesListFx.doneData, (_, payload) => payload.data);
$countriesListLoading.on(getCountriesListFx.pending, (_, payload) => payload);
