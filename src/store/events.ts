import axios, { type AxiosResponse } from "axios";
import { createEffect, createEvent } from "effector";

import type { TCountry } from "@/store/types";

export const getCountriesListFx = createEffect(() => {
  return axios.get<any, AxiosResponse<TCountry[], any>, any>("https://restcountries.com/v3.1/all");
});
export const setSelectedCountry = createEvent<TCountry>();
