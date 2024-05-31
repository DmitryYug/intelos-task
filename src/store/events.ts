import axios from "axios";
import { createEffect } from "effector";

export const getCountriesListFx = createEffect(() => {
  return axios.get("https://restcountries.com/v3.1/all");
});
