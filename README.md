# VUE STORYBOOK LIBRARY

Live demo:

```config
https://vue-storybook-library.netlify.app
```

run locally: `yarn storybook`

see the [storybook docs](https://storybook.js.org/docs/vue/get-started/introduction) for more info.

## Setup & Configure

The `.storybook` folder contains all the config files for setting up storybook.

* Configure any addons in the `.storybook/main.js` file
* External scripts, fonts and stylesheets are loaded in  `.storybook/preview-head.html`
* Imports the sass/scss theme and variables in `.storybook/preview.js` via ` import '../theme/main.scss'`

## Assets

* Static assets and resources are located in the `stories/assets` folder

## Theme

All the base styling is configured in the theme folder and there are mixins to create custom class names for styling background color, text and spacing according to the theme variables. Each component has it's own scoped scss file that's directly imported.

* sass mixins
* utility class names like tailwind
* sass/css theme variables

The theme variables are mixed between sass variables for the mixins and class names in addition to css variables. I was having an issue importing the sass vars into SFC's but the root CSS vars work. Simple work around.

```config
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
