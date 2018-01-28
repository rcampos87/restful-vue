import { GET_ALL_EVENTS, GET_ALL_EVENTS_SUCCEEDED, GET_ALL_EVENTS_FAILED, GET_EVENT_DETAILS, SET_LOADING, ADD_NEW_EVENT, UPDATE_EVENT } from './event-mutation-types'

const eventMutations = {
  [SET_LOADING](state, payload) {
    state.loading = payload
  },
  [GET_ALL_EVENTS](state) {
    state.loading = true
  },
  [GET_ALL_EVENTS_SUCCEEDED](state, payload) {
    state.events = payload
  },
  [GET_ALL_EVENTS_FAILED](state) {
    state.loading = false
    state.events = []
  },
  [GET_EVENT_DETAILS](state, { event }) {
    state.event = event
  },
  [ADD_NEW_EVENT](state, { id }) {

  },

  [UPDATE_EVENT](state, { id }) {
  }
}

export default eventMutations