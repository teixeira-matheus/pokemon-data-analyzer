/*Disclaimer:
Never type anything with any, I am sorry for that and I just used it for the sake of time
and because there are no types for the pokedex lib*/
import { GetPokemon, PokemonTypes } from "../dto/";

export function normalizePokemonData(pokemonData: any[]): GetPokemon[]{
  return pokemonData.map((rawData) => {
    return {
      id: rawData.id,
      name: rawData.name,
      height: rawData.height,
      weight: rawData.weight,
      type: rawData.types.map((data: PokemonTypes) => data.type.name).join('/') //join all different types in the same string
    } as GetPokemon;
  });
}