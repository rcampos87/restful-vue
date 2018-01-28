import eventMutations from './event-mutations'
import { getAllEvents, getEventDetails } from './event-actions'

const state = {
  loading: true,
  events: [],
  event: {}
}

const getters = {
  isLoading: state => state.loading,
  getEvents: state => state.events,
  getEvent: state => state.event,
}

const actions = {
  getAllEvents,
  getEventDetails
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