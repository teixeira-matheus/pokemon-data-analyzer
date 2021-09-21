"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
describe('CLI (e2e)', () => {
    describe('pokemon-analyzer command (averageStats)', () => {
        describe('Attempt to use cli without required parameters', () => {
            it('Should return error if --limit is not provided', () => {
                const pokemonAnalyzer = (0, child_process_1.spawn)('node', [
                    'build/src/cli.js',
                    'pokemon-analyzer',
                    '--offset',
                    '0'
                ]);
                const chunks = [];
                pokemonAnalyzer.stderr.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                pokemonAnalyzer.stderr.on('end', () => {
                    const output = Buffer.concat(chunks).toString();
                    expect(output).toContain("Missing required argument: limit");
                });
            });
            it('Should return error if --offset is not provided', () => {
                const pokemonAnalyzer = (0, child_process_1.spawn)('node', [
                    'build/src/cli.js',
                    'pokemon-analyzer',
                    '--limit',
                    '10'
                ]);
                const chunks = [];
                pokemonAnalyzer.stderr.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                pokemonAnalyzer.stderr.on('end', () => {
                    const output = Buffer.concat(chunks).toString();
                    expect(output).toContain("Missing required argument: offset");
                });
            });
            it('Should return error if --limit and --offset are not provided', () => {
                const pokemonAnalyzer = (0, child_process_1.spawn)('node', [
                    'build/src/cli.js',
                    'pokemon-analyzer',
                ]);
                const chunks = [];
                pokemonAnalyzer.stderr.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                pokemonAnalyzer.stderr.on('end', () => {
                    const output = Buffer.concat(chunks).toString();
                    expect(output).toContain("Missing required arguments: limit, offset");
                });
            });
        });
        describe('Attempt to use cli with successful response', () => {
            it('Should display average stats for all queried pokemons', () => {
                const pokemonAnalyzer = (0, child_process_1.spawn)('node', [
                    'build/src/cli.js',
                    'pokemon-analyzer',
                    '--limit',
                    '10',
                    '--offset',
                    '0'
                ]);
                const chunks = [];
                pokemonAnalyzer.stdout.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                pokemonAnalyzer.stdout.on('end', () => {
                    const output = Buffer.concat(chunks).toString();
                    expect(output).toContain("Limit: 10 / Offset: 0\n"
                        + "Average metrics in all pokémons (10 analyzed)\n"
                        + "Average weight: 35.78kg\n"
                        + "Average height: 1.05m");
                    expect(output).toContain("Execution Time: ");
                });
            });
            it('Should display average stats for all queried pokemons by type', () => {
                const pokemonAnalyzer = (0, child_process_1.spawn)('node', [
                    'build/src/cli.js',
                    'pokemon-analyzer',
                    '--limit',
                    '10',
                    '--offset',
                    '0',
                    '--sortByType'
                ]);
                const chunks = [];
                pokemonAnalyzer.stdout.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                pokemonAnalyzer.stdout.on('end', () => {
                    const output = Buffer.concat(chunks).toString();
                    expect(output).toContain("Limit: 10 / Offset: 0\n"
                        + "Average metrics in all pokémons (10 analyzed)\n"
                        + "Average weight: 35.78kg\n"
                        + "Average height: 1.05m");
                    //check the aggregate by type
                    expect(output).toContain("By bug pokémon type (1 analyzed)\n"
                        + "Average weight: 2.90kg\n"
                        + "Average height: 0.30m\n"
                        + "------------------------------------------------------------");
                    expect(output).toContain("By fire pokémon type (2 analyzed)\n"
                        + "Average weight: 13.75kg\n"
                        + "Average height: 0.85m\n"
                        + "------------------------------------------------------------");
                    expect(output).toContain("By fire/flying pokémon type (1 analyzed)\n"
                        + "Average weight: 90.50kg\n"
                        + "Average height: 1.70m\n"
                        + "------------------------------------------------------------");
                    expect(output).toContain("By grass/poison pokémon type (3 analyzed)\n"
                        + "Average weight: 39.97kg\n"
                        + "Average height: 1.23m\n"
                        + "------------------------------------------------------------");
                    expect(output).toContain("By water pokémon type (3 analyzed)\n"
                        + "Average weight: 39.00kg\n"
                        + "Average height: 1.03m\n"
                        + "------------------------------------------------------------");
                    expect(output).toContain("Execution Time: ");
                });
            });
        });
    });
});
