# VUE STORYBOOK LIBRARY

A UI library built with Storybook for Vue 2.

Live demo:

```
https://vue-storybook-library.netlify.app
```

## Install library as a package

```
# with npm
npm install @jdizm/vue-storybook

# with yarn
yarn install @jdizm/vue-storybook
```

All exported components are prefixed with a `V` eg `VButton`

In your apps main.js / main.ts

```
# import the base styles
import "@jdizm/vue-storybook/dist/index.css";

# import the components
import { VButton } from "@jdizm/vue-storybook";

# each can be registered via Vue.component()
Vue.component("VButton", VButton);
```

## For Development

For development and to modify this storybook library clone this project and:

```
# run locally
yarn storybook

# run a local demo App.vue
npm run serve
```

see the [storybook docs](https://storybook.js.org/docs/vue/get-started/introduction) for more info.

## Setup & Configure

The `.storybook` folder contains all the config files for setting up storybook.

- Configure any addons in the `.storybook/main.js` file
- External scripts, fonts and stylesheets are loaded in `.storybook/preview-head.html`
- Imports the sass/scss theme and variables in `.storybook/preview.js` via ` import '../theme/main.scss'`

## Assets

- Static assets and resources are located in the `stories/assets` folder

## Theme

All the base styling is configured in the theme folder and there are mixins to create custom class names for styling background color, text and spacing according to the theme variables. Each component has it's own scoped scss file that's directly imported.

- sass mixins
- utility class names like tailwind
- sass/css theme variables

The theme variables are mixed between sass variables for the mixins and class names in addition to css variables. I was having an issue importing the sass vars into SFC's but the root CSS vars work. Simple work around.

```
/theme
  main.scss
  _vars.scss
  _theme.scss
  _global.scss
  _mixins.scss
```

## Run locally

`yarn storybook`

## Build Storybook as a static web application

<https://storybook.js.org/docs/vue/workflows/publish-storybook>

build storybook: `yarn build-storybook`
serve locally: `npx http-server storybook-static`

## Publish Storybook online

<https://storybook.js.org/docs/vue/workflows/publish-storybook#publish-storybook-online>

netlify is configured to deploy the storybook static build.

build folder: /storybook-static
production url: <https://vue-storybook-library.netlify.app/>

## Build as a library

This will package the Vue project as a library to be imported in another application.

```
yarn build
```

## Import into project

Clone this git into the project root in /storybook folder

Then add the theme files to the css settings in your project build config..

Vue - vue.config.js
Nuxt - nuxt.config.js

Import each component from the folder as needed, instead of from /components, import them directly from /storybook.

For Vue - add the reference to scss files in vue.config.js.

```config
css: [
    // import storybook theme
    './storybook/theme/main.scss'
  ],
```

For Nuxt - add the reference to scss files in nuxt.config.js.

```config
css: [
    // import storybook theme
    './storybook/theme/main.scss'
  ],
```

### Using the components

Import the components directly from the /storybook folder (whatever you named this project folder).

```config
import Toast from '@/storybook/stories/molecules/Toast.vue'
```

### Dark mode and Color Scheme

Dark and Light mode css variables are added to :root

The default color scheme is light mode.

The color scheme is applied via a `light` or `dark` class added to the root html so you can overwrite the default preference

```
<html lang="en" class="dark">
```
