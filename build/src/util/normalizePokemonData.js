"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePokemonData = void 0;
function normalizePokemonData(pokemonData) {
    return pokemonData.map((rawData) => {
        return {
            id: rawData.id,
            name: rawData.name,
            height: rawData.height,
            weight: rawData.weight,
            type: rawData.types.map((data) => data.type.name).join('/') //join all different types in the same string
        };
    });
}
exports.normalizePokemonData = normalizePokemonData;
