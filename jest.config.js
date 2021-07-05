module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor",
  },
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"],
  moduleFileExtensions: ["vue", "js", "jsx", "json", "node"],
};
