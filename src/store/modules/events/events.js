import eventMutations from './event-mutations'
import eventActions from './event-actions'

const state = {
  loading: true,
  events: [],
  event: {},
  error: ''
}

const getters = {
  isLoading: state => state.loading,
  getEvents: state => state.events,
  getEvent: state => state.event,
  hasError: state => !!state.error && state.error
}

const actions = {
  ...eventActions
}

const mutations = {
  ...eventMutations
}

export default {
  state,
  getters,
  actions,
  mutations
}