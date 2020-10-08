module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
    css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/main.scss";`
      }
    }
  },
}