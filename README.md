# VUE STORYBOOK LIBRARY

```
https://vue-storybook-library.netlify.app
```

storybook
https://storybook.js.org/docs/vue/get-started/introduction

## Setup & Configure

/.storybook 

contains all the config files for setting up storybook.

* Load static assets and resources
* Load css files, fonts
* Load sass/scss theme and variables

## Theme

all the styling is configured in the theme folder and there are mixins to create custom class names for styling bg-color, text and spacing.

* class names like tailwind
* sass/css theme variables

the theme variables are mixed between sass variables for the mixins and class names in addition to css variables. I was having an issue importing the sass vars into SFC's but the root CSS vars work. Simple work around.

```
/theme
  main.scss
  _vars.scss
  _theme.scss
  _global.scss
  _mixins.scss
```

### utility classes

// TODO utility classes, error, success etc need some work

## Run locally

`yarn storybook`

## Build Storybook as a static web application

https://storybook.js.org/docs/vue/workflows/publish-storybook

build storybook: `yarn build-storybook`
serve locally: `npx http-server storybook-static`

## Publish Storybook online

https://storybook.js.org/docs/vue/workflows/publish-storybook#publish-storybook-online

netlify is configured to deploy the storybook static build.

build folder: /storybook-static
production url: https://vue-storybook-library.netlify.app/


## Import into project

Clone this git into the project root in /storybook folder

Then add the theme files to the css settings in your project build config.. 

Vue - vue.config.js 
Nuxt - nuxt.config.js

Import each component from the folder as needed, instead of from /components, import them directly from /storybook.


