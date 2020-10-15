// module.exports = {
//     css: {
//     loaderOptions: {
//       scss: {
//         prependData: `@import "~@/assets/scss/theme.scss";`
//       }
//     }
//   }
// }
// https://cli.vuejs.org/config/
// import global sass files
// https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/scss/_theme.scss";`
      }
    }
  },
  devServer: {
    proxy: {
      '^/webhook': {
        target: 'https://hooks.zapier.com/hooks/catch/519363/o8az5jw/',
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/webhook': '' },
      }
    }
  }
};