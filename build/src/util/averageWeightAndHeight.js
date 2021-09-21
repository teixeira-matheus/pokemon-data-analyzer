"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.averageWeightAndHeightByType = exports.averageWeightAndHeight = void 0;
function averageWeightAndHeight(pokemons) {
    if (pokemons.length > 0) {
        const averageWeight = (Object.values(pokemons).reduce((t, { weight }) => t + weight, 0) / pokemons.length);
        const averageHeight = (Object.values(pokemons).reduce((t, { height }) => t + height, 0) / pokemons.length);
        return { averageWeight, averageHeight, count: pokemons.length };
    }
    return {
        averageWeight: 0,
        averageHeight: 0,
        count: 0
    };
}
exports.averageWeightAndHeight = averageWeightAndHeight;
function averageWeightAndHeightByType(pokemons) {
    const aggregateByType = [];
    pokemons.forEach((pokemon) => {
        //check if pokemon type is already being sorted
        const indexFound = aggregateByType.map((aggregate) => aggregate.type).indexOf(pokemon.type);
        if (indexFound !== -1) {
            //if type already exists just save data
            aggregateByType[indexFound].count++;
            aggregateByType[indexFound].totalHeight += pokemon.height;
            aggregateByType[indexFound].totalWeight += pokemon.weight;
        }
        else {
            //if type doesnt exists create a new one
            aggregateByType.push({
                type: pokemon.type,
                count: 1,
                totalHeight: pokemon.height,
                totalWeight: pokemon.weight,
                averageHeight: 0,
                averageWeight: 0
            });
        }
    });
    //calculate averages by type
    aggregateByType.forEach((aggregate) => {
        aggregate.averageHeight = aggregate.totalHeight / aggregate.count;
        aggregate.averageWeight = aggregate.totalWeight / aggregate.count;
    });
    //order the array by type
    aggregateByType.sort((a, b) => (a.type > b.type) ? 1 : -1);
    return aggregateByType;
}
exports.averageWeightAndHeightByType = averageWeightAndHeightByType;
