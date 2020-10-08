import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  // https://vuetifyjs.com/en/features/theme/#customizing
  theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        // secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
});
