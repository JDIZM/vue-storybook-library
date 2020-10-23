# VUE STORYBOOK LIBRARY

storybook
https://storybook.js.org/docs/vue/get-started/introduction

## Setup & Configure

/.storybook 

contains all the config files for setting up storybook.

* Load static assets and resources
* Load css files, fonts
* Load sass/scss theme and variables

## Theme

all the styling is configured in the theme folder and there are mixins to create custom class names for styling bg/colour.
// TODO can you pass vars from component to css.. we could pass theme colours down

```
/theme
  - main.scss
  - _vars.scss
  - _theme.scss
  - _global.scss
  - _mixins.scss
```

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
