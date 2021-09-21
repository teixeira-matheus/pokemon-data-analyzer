import type { Arguments, CommandBuilder } from 'yargs';
import { GetPokemon, GetPokemonSummaryList } from '../dto';
import {
  AverageStats,
  AverageStatsByType,
  averageWeightAndHeight,
  averageWeightAndHeightByType,
  normalizePokemonData
} from '../util';

const PokedexLib = require('pokedex-promise-v2');
var pokedexOptions = {
  timeout: 200 * 1000 // 20s
}
const Pokedex = new PokedexLib(pokedexOptions);

type Options = {
  limit: number;
  offset: number;
};

export const command: string = 'pokemon-analyzer';
export const desc: string = 'pokemon-analyzer -offset 800 -limit 50';

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs
    .options({
      limit: { type: 'number', demandOption: true },
      offset: { type: 'number', demandOption: true }
    });

export const handler = async (argv: Arguments<Options>): Promise<void> => {
  console.time('Execution Time');
  const { limit, offset } = argv;
  
  //get pokemon list
  const pokemonsList: GetPokemonSummaryList = await Pokedex.getPokemonsList({limit, offset});
  const pokemonsUrls: string[] = pokemonsList.results.map((pokemon) => pokemon.url);
  
  //get details about each pokemon
  const rawData = await Pokedex.resource(pokemonsUrls);
  const pokemonsDetails: GetPokemon[] = normalizePokemonData(rawData);

  process.stdout.write(`Limit: ${limit} / Offset: ${offset}\n`);

  const averageResults: AverageStats = averageWeightAndHeight(pokemonsDetails);
  process.stdout.write(`Average metrics in all pokémons (${averageResults.count} analyzed) \n`+
                       `Average weight: ${(averageResults.averageWeight/10).toFixed(2)}kg\n`+
                       `Average height: ${(averageResults.averageHeight/10).toFixed(2)}m\n`+
                       `------------------------------------------------------------\n\n`);
  
  const averageResultsByType: AverageStatsByType[] = averageWeightAndHeightByType(pokemonsDetails);
  averageResultsByType.forEach((result) => {
    process.stdout.write(`By ${result.type} pokémon type (${result.count} analyzed)\n`+
                       `Average weight: ${(result.averageWeight/10).toFixed(2)}kg\n`+
                       `Average height: ${(result.averageHeight/10).toFixed(2)}m\n`+
                       `------------------------------------------------------------\n`);
  })

  console.timeEnd('Execution Time');
  process.exit(0);
};