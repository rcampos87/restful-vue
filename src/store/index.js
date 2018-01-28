import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import VuexPromiseMiddleware from 'vuex-promise-middleware'
import events from './modules/events/events'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const logger = debug ? [createLogger()] : []
const plugins = [
  ...logger,
  VuexPromiseMiddleware
]

export default new Vuex.Store({
  modules: {
    events,
  },
  strict: debug,
  plugins
})