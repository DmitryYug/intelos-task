export type TCurrency = Record<string, { name: string }>;
export type TCountry = {
  name: {
    official: string;
  };
  capital: string[];
  population: number;
  region: string;
  currencies: TCurrency;
  flags: {
    png: string;
    alt: string;
  };
  latlng: [number, number];
};
