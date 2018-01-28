import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCEEDED,
  GET_ALL_EVENTS_FAILED,
  GET_EVENT_DETAILS,
  SET_LOADING,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_SUCCEEDED,
  ADD_NEW_EVENT_FAILED,
  UPDATE_EVENT
} from './event-mutation-types'

const eventMutations = {
  [SET_LOADING](state, payload) {
    state.loading = payload
  },
  [GET_ALL_EVENTS](state) {
    state.loading = true
    state.error = null
  },
  [GET_ALL_EVENTS_SUCCEEDED](state, payload) {
    state.loading = false
    state.events = payload
  },
  [GET_ALL_EVENTS_FAILED](state, err) {
    state.loading = false
    state.events = []
    state.error = err
  },
  [GET_EVENT_DETAILS](state, { event }) {
    state.event = event
  },
  [ADD_NEW_EVENT](state) {
    state.loading = true
    state.error = null
  },
  [ADD_NEW_EVENT_SUCCEEDED](state, payload) {
    state.loading = false
    state.event = payload
  },
  [ADD_NEW_EVENT_FAILED](state, err) {
    state.loading = false
    state.event = {}
    state.error = err
  },

  [UPDATE_EVENT](state, { id }) { }
}

export default eventMutations