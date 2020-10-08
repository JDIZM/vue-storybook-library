// TODO vuex store
// store
import Vue from 'vue'
import Vuex from 'vuex'
// import resources from './resources'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    // resources
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
