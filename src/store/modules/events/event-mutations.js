import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCEEDED,
  GET_ALL_EVENTS_FAILED,
  GET_EVENT_DETAILS,
  SET_LOADING,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_SUCCEEDED,
  ADD_NEW_EVENT_FAILED,
  UPDATE_EVENT,
  GET_EVENT_DETAILS_SUCCEEDED,
  GET_EVENT_DETAILS_FAILED
} from './event-mutation-types'

const eventMutations = {
  [SET_LOADING](state, payload) {
    state.loading = payload
  },
  [GET_ALL_EVENTS](state) {
    state.loading = true
    state.events = []
    state.error = null
  },
  [GET_ALL_EVENTS_SUCCEEDED](state, payload) {
    state.loading = false

    if (payload.data) {
      state.events = payload.data
    } else if (payload.error) {
      state.error = payload.message
    }
  },
  [GET_ALL_EVENTS_FAILED](state, err) {
    state.loading = false
    state.events = []
    state.error = err
  },
  [GET_EVENT_DETAILS](state, payload) {
    state.loading = true
    state.error = null
    state.event = {}
  },
  [GET_EVENT_DETAILS_SUCCEEDED](state, payload) {
    state.loading = false

    if (payload.data) {
      state.event = payload.data
    } else if (payload.error) {
      state.error = payload.message
    }
  },
  [GET_EVENT_DETAILS_FAILED](state, err) {
    state.loading = false
    state.error = err.message
  },
  [ADD_NEW_EVENT](state) {
    state.loading = true
    state.event = {}
    state.error = null
  },
  [ADD_NEW_EVENT_SUCCEEDED](state, payload) {
    state.loading = false

    if (payload.data) {
      state.event = payload.data
    } else if (payload.error) {
      state.error = payload.message
    }
  },
  [ADD_NEW_EVENT_FAILED](state, err) {
    state.loading = false
    state.event = {}
    state.error = err.message
  },

  [UPDATE_EVENT](state, { id }) { }
}

export default eventMutations