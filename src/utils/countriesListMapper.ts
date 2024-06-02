import type { TCountry } from "@/store/types";

export const countriesListMapper = (list: TCountry[]) =>
  list.map(country => ({
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
