"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const util_1 = require("../util");
const PokedexLib = require('pokedex-promise-v2');
var pokedexOptions = {
    timeout: 200 * 1000
};
const Pokedex = new PokedexLib(pokedexOptions);
exports.command = 'pokemon-analyzer';
exports.desc = 'pokemon-analyzer -offset 800 -limit 50';
const builder = (yargs) => yargs
    .options({
    limit: { type: 'number', demandOption: true },
    offset: { type: 'number', demandOption: true },
    sortByType: { type: 'boolean' }
});
exports.builder = builder;
const handler = async (argv) => {
    console.time('Execution Time');
    const { limit, offset, sortByType } = argv;
    //get pokemon list
    const pokemonsList = await Pokedex.getPokemonsList({ limit, offset });
    const pokemonsUrls = pokemonsList.results.map((pokemon) => pokemon.url);
    //get details about each pokemon
    try {
        const rawData = await Pokedex.resource(pokemonsUrls);
        const pokemonsDetails = (0, util_1.normalizePokemonData)(rawData);
        process.stdout.write(`Limit: ${limit} / Offset: ${offset}\n`);
        const averageResults = (0, util_1.averageWeightAndHeight)(pokemonsDetails);
        process.stdout.write(`Average metrics in all pokémons (${averageResults.count} analyzed) \n` +
            `Average weight: ${(averageResults.averageWeight / 10).toFixed(2)}kg\n` +
            `Average height: ${(averageResults.averageHeight / 10).toFixed(2)}m\n` +
            `=============================================================\n\n`);
        if (sortByType) {
            const averageResultsByType = (0, util_1.averageWeightAndHeightByType)(pokemonsDetails);
            averageResultsByType.forEach((result) => {
                process.stdout.write(`By ${result.type} pokémon type (${result.count} analyzed)\n` +
                    `Average weight: ${(result.averageWeight / 10).toFixed(2)}kg\n` +
                    `Average height: ${(result.averageHeight / 10).toFixed(2)}m\n` +
                    `------------------------------------------------------------\n`);
            });
        }
        console.timeEnd('Execution Time');
        process.exit(0);
    }
    catch (e) {
        process.stdout.write(`${e}\nPlease try again\n`);
        console.timeEnd('Execution Time');
        process.exit(0);
    }
};
exports.handler = handler;
