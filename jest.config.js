module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    "^~/(.*)$": "<rootDir>/$1",
    "^vue$": "vue/dist/vue.common.dev.js"
  },
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/stories/**/*.vue"],
  moduleFileExtensions: ["js", "vue"],
  globalSetup: "<rootDir>/test/globalSetup.js",
  setupFilesAfterEnv: ["<rootDir>/test/setupAfterEnv.js"],
  testMatch: ["**/stories/**/*.spec.js"]
};
