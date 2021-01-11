// https://storybook.js.org/docs/vue/configure/theming
// .storybook/theme.js

import { create } from '@storybook/theming/create';
import imgSrc from './stories/assets/logo.png'
export default create({
  base: 'light',
  brandTitle: 'Vue Storybook Library',
  brandUrl: 'https://jamesdonnelly.dev',
  brandImage: imgSrc,
});
