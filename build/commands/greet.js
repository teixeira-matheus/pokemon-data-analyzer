"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.command = void 0;
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
exports.command = 'pokemon-analyzer';
exports.desc = 'pokemon-analyzer -offset 800 -limit 50';
const builder = (yargs) => yargs
    .options({
    limit: { type: 'number', demandOption: true },
    offset: { type: 'number', demandOption: true }
});
exports.builder = builder;
const handler = async (argv) => {
    console.time('Execution Time');
    const { limit, offset } = argv;
    process.stdout.write(`Limit: ${limit} / Offset: ${offset}\n`);
    //get pokemon list
    const pokemonsList = await P.getPokemonsList({ limit, offset });
    process.stdout.write(`${pokemonsList.count} Pokémons analyzed!`);
    console.timeEnd('\n\nExecution Time');
    process.exit(0);
};
exports.handler = handler;
