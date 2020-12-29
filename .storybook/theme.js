// https://storybook.js.org/docs/vue/configure/theming
// .storybook/theme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Vue Storybook Library',
  brandUrl: 'https://jamesdonnelly.dev',
  brandImage: './logo.png',
});