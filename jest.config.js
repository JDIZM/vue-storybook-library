module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  // jest.config.js
  transformIgnorePatterns: ["/node_modules/(?!(@storybook/.*\\.vue$))"]
}
