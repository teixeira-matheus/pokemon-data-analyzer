import { pokemonMockData } from '../../tests/pokemonMockData';
import {
  AverageStats,
  AverageStatsByType,
  averageWeightAndHeight,
  averageWeightAndHeightByType
} from "./averageWeightAndHeight";

describe('Average weight and height functions', () => {
  describe('averageWeightAndHeight', () => {
    
    it('Results should be 0', () => {
      const results: AverageStats = averageWeightAndHeight([]);
      expect(results).toBeDefined();
      expect(results).toMatchObject({
        averageWeight: 0,
        averageHeight: 0,
        count: 0
      });
    });

    it('should return average for all pokemons passed', () => {
      const results: AverageStats = averageWeightAndHeight(pokemonMockData);
      expect(results).toBeDefined();
      expect(results).toMatchObject({
        averageWeight: 357.8,
        averageHeight: 10.5,
        count: 10
      });
    });

  });

  describe('averageWeightAndHeightByType', () => {
    
    it('Results should be 0', () => {
      const results: AverageStatsByType[] = averageWeightAndHeightByType([]);
      expect(results).toBeDefined();
      expect(results).toHaveLength(0);
    });

    it('should return average for all pokemons passed sorted and ordered by type', () => {
      const results: AverageStatsByType[] = averageWeightAndHeightByType(pokemonMockData);
      expect(results).toBeDefined();
      expect(results).toHaveLength(5);
      expect(results).toEqual([
        {
          type: "bug",
          count: 1,
          totalHeight: 3,
          totalWeight: 29,
          averageHeight: 3,
          averageWeight: 29,
        },
        {
          type: "fire",
          count: 2,
          totalHeight: 17,
          totalWeight: 275,
          averageHeight: 8.5,
          averageWeight: 137.5,
        },
        {
          type: "fire/flying",
          count: 1,
          totalHeight: 17,
          totalWeight: 905,
          averageHeight: 17,
          averageWeight: 905,
        },
        {
          type: "grass/poison",
          count: 3,
          totalHeight: 37,
          totalWeight: 1199,
          averageHeight: 12.333333333333334,
          averageWeight: 399.6666666666667,
        },
        {
          type: "water",
          count: 3,
          totalHeight: 31,
          totalWeight: 1170,
          averageHeight: 10.333333333333334,
          averageWeight: 390,
        }
      ]);
    });

  });
});