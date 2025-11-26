/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
    "^yargs/helpers$": "<rootDir>/node_modules/yargs/helpers/helpers.mjs",
  },
  transformIgnorePatterns: ["/node_modules/(?!(yargs|yargs-parser)/)"],
};
