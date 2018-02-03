import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCEEDED,
  GET_ALL_EVENTS_FAILED,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_SUCCEEDED,
  ADD_NEW_EVENT_FAILED,
  GET_EVENT_DETAILS
} from './event-mutation-types'
import Axios from '../../../common/axios'
import router from '../../../router'
import endpoints from '../../../common/endpoints';

const axios = new Axios();

function getAllEvents({ commit }) {
  commit(GET_ALL_EVENTS)
  axios
    .doGet(endpoints.events)
    .then(res => {
      commit(GET_ALL_EVENTS_SUCCEEDED, res.payload)
      if (res.payload.data.length === 0) {
        router.push('/new')
      }
    })
    .catch(err => {
      commit(GET_ALL_EVENTS_FAILED, err.payload)
      router.push('/new')
    })
}

function getEventDetails({ commit }) {
  commit(GET_EVENT_DETAILS)
  axios
    .doGet(endpoints.events)
    .then(res => {
      commit(GET_EVENT_DETAILS_SUCCEEDED, res.payload)
    })
    .catch(err => {
      commit(GET_EVENT_DETAILS_FAILED, err.payload)
    })
}

function addEvent({ commit }, event) {
  commit(ADD_NEW_EVENT, res)
  axios.doPost(endpoints.event, event)
    .then(res => {
      commit(ADD_NEW_EVENT_SUCCEEDED, res.payload)
      router.push('/')
    })
    .catch(err => {
      commit(ADD_NEW_EVENT_FAILED, err.payload)
    })
}

export default {
  getAllEvents,
  getEventDetails,
  addEvent
}