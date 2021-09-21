import { GetPokemon } from "../dto/";

export type AverageStats = {
  averageWeight: number;
  averageHeight: number;
  count: number;
}

export type AverageStatsByType = {
  type: string;
  count: number;
  totalHeight: number;
  totalWeight: number;
  averageHeight: number;
  averageWeight: number;
}

export function averageWeightAndHeight(pokemons: GetPokemon[]): AverageStats{
  const averageWeight: number = Object.values(pokemons).reduce((t, {weight}) => t + weight, 0) / pokemons.length;
  const averageHeight: number = Object.values(pokemons).reduce((t, {height}) => t + height, 0) / pokemons.length;
  return {averageWeight, averageHeight, count: pokemons.length};
}

export function averageWeightAndHeightByType(pokemons: GetPokemon[]): AverageStatsByType[]{
  const aggregateByType: AverageStatsByType[] = [];
  pokemons.forEach((pokemon) => {
    //check if pokemon type is already being sorted
    const indexFound = aggregateByType.map((aggregate) => aggregate.type).indexOf(pokemon.type);
    if(indexFound !== -1){
      //if type already exists just save data
      aggregateByType[indexFound].count++;
      aggregateByType[indexFound].totalHeight+= pokemon.height;
      aggregateByType[indexFound].totalWeight+= pokemon.weight;
    }else{
      //if type doesnt exists create a new one
      aggregateByType.push({
        type: pokemon.type,
        count: 1,
        totalHeight: pokemon.height,
        totalWeight: pokemon.weight,
        averageHeight: 0,
        averageWeight: 0
      })
    }
  })

  //calculate averages by type
  aggregateByType.forEach((aggregate) => {
    aggregate.averageHeight = aggregate.totalHeight / aggregate.count;
    aggregate.averageWeight = aggregate.totalWeight / aggregate.count;
  });

  //order the array by type
  aggregateByType.sort((a, b) => (a.type > b.type) ? 1 : -1)

  return aggregateByType;

}