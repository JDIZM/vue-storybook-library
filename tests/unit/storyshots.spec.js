// storybook.test.js

// Storyshots.test.js
import initStoryshots from '@storybook/addon-storyshots';

// https://github.com/storybookjs/storybook/issues/13223
jest.spyOn(console, 'error').mockImplementation(() => {});

initStoryshots();