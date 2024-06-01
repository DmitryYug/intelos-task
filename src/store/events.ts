import axios, { type AxiosResponse } from "axios";
import { createEffect, createEvent } from "effector";

import type { TCountry } from "@/store/types";

// Async events
export const getCountriesListFx = createEffect(() => {
  return axios.get<any, AxiosResponse<TCountry[], any>, any>("https://restcountries.com/v3.1/all");
});
export const getCountriesListFilteredFx = createEffect((searchValue: string) => {
  return axios.get<any, AxiosResponse<TCountry[], any>, any>(`https://restcountries.com/v3.1/name/${searchValue}`);
});

// Events
export const setSelectedCountry = createEvent<TCountry>();
export const setInitialCountiesList = createEvent();
