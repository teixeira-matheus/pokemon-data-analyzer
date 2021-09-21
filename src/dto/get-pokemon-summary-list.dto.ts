export type GetPokemonSummaryList = {
  count: number;
  next: string;
  previous: boolean;
  results: NamedAPIResource[];
}

export type NamedAPIResource = {
  name: string;
  url: string;
}

export type PokemonTypes = {
  slot: number;
  type: NamedAPIResource
}