export type TCurrency = {
  readonly [x: string]: {
    readonly name: string;
  };
};
export type TCountry = {
  readonly name: {
    readonly official: string;
  };
  readonly capital: ReadonlyArray<string>;
  readonly population: number;
  readonly region: string;
  readonly currencies: TCurrency;
  readonly flags: {
    readonly png: string;
    readonly alt: string;
  };
  readonly latlng: Readonly<[number, number]>;
};
