/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageDirectory: "coverage",
  coverageReporters: ["json", "html", "text"],
  collectCoverageFrom: [
      "**/*.ts",
      "build/**",
      "!node_modules/**"
  ],
};
