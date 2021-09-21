"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tests_1 = require("../../tests/");
const normalizePokemonData_1 = require("./normalizePokemonData");
describe('Normalize data functions', () => {
    describe('normalizePokemonData', () => {
        it('Results should be empty', () => {
            const results = (0, normalizePokemonData_1.normalizePokemonData)([]);
            expect(results).toBeDefined();
            expect(results).toHaveLength(0);
        });
        it('should return pokemon data normalized', () => {
            const results = (0, normalizePokemonData_1.normalizePokemonData)(tests_1.pokemonMockRawData);
            expect(results).toBeDefined();
            expect(results).toHaveLength(10);
            expect(results).toEqual(expect.arrayContaining([
                {
                    id: 1,
                    name: "bulbasaur",
                    height: 7,
                    weight: 69,
                    type: "grass/poison"
                },
                {
                    id: 2,
                    name: "ivysaur",
                    height: 10,
                    weight: 130,
                    type: "grass/poison"
                },
                {
                    id: 3,
                    name: "venusaur",
                    height: 20,
                    weight: 1000,
                    type: "grass/poison"
                },
                {
                    id: 4,
                    name: "charmander",
                    height: 6,
                    weight: 85,
                    type: "fire"
                },
                {
                    id: 5,
                    name: "charmeleon",
                    height: 11,
                    weight: 190,
                    type: "fire"
                },
                {
                    id: 6,
                    name: "charizard",
                    height: 17,
                    weight: 905,
                    type: "fire/flying"
                },
                {
                    id: 7,
                    name: "squirtle",
                    height: 5,
                    weight: 90,
                    type: "water"
                },
                {
                    id: 8,
                    name: "wartortle",
                    height: 10,
                    weight: 225,
                    type: "water"
                },
                {
                    id: 9,
                    name: "blastoise",
                    height: 16,
                    weight: 855,
                    type: "water"
                },
                {
                    id: 10,
                    name: "caterpie",
                    height: 3,
                    weight: 29,
                    type: "bug"
                }
            ]));
        });
    });
});
