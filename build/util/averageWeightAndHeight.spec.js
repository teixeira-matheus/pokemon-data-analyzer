"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const averageWeightAndHeight_1 = require("./averageWeightAndHeight");
describe('Average weight and height functions', () => {
    const pokemonDataMock = [
        {
            id: 1,
            name: "glaceon",
            height: 27.18,
            weight: 11380,
            type: "classic/hyper",
        },
        {
            id: 2,
            name: "spheal",
            height: 25.5,
            weight: 170820,
            type: "classic",
        },
        {
            id: 3,
            name: "scolipede",
            height: 25.5,
            weight: 170820,
            type: "classic",
        },
        {
            id: 4,
            name: "lilligant",
            height: 25.5,
            weight: 170820,
            type: "classic",
        },
        {
            id: 5,
            name: "bulbasaur",
            height: 25.5,
            weight: 170820,
            type: "classic",
        },
        {
            id: 6,
            name: "bulbasaur",
            height: 25.5,
            weight: 170820,
            type: "classic",
        }
    ];
    describe('averageWeightAndHeight', () => {
        it('Results should be 0', () => {
            const results = (0, averageWeightAndHeight_1.averageWeightAndHeight)([]);
            expect(results).toBeDefined();
            expect(results).toMatchObject({
                averageWeight: 0,
                averageHeight: 0,
                count: 0
            });
        });
    });
    describe('averageWeightAndHeightByType', () => {
        it('Results should be 0', () => {
            const results = (0, averageWeightAndHeight_1.averageWeightAndHeightByType)([]);
            expect(results).toBeDefined();
            expect(results).toHaveLength(0);
        });
    });
});
