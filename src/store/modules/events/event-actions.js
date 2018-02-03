import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCEEDED,
  GET_ALL_EVENTS_FAILED,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_SUCCEEDED,
  ADD_NEW_EVENT_FAILED,
  GET_EVENT_DETAILS,
  GET_EVENT_DETAILS_FAILED,
  GET_EVENT_DETAILS_SUCCEEDED,
  UPDATE_EVENT,
  UPDATE_EVENT_FAILED,
  UPDATE_EVENT_SUCCEEDED,
  DELETE_EVENT,
  DELETE_EVENT_FAILED,
  DELETE_EVENT_SUCCEEDED
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

function getEventDetails({ commit }, id) {
  commit(GET_EVENT_DETAILS)
  return axios
    .doGet(endpoints.event(id))
    .then(res => {
      commit(GET_EVENT_DETAILS_SUCCEEDED, res.payload)
      return res.payload
    })
    .catch(err => {
      commit(GET_EVENT_DETAILS_FAILED, err.payload)
      return err.payload
    })
}

function addEvent({ commit }, event) {
  commit(ADD_NEW_EVENT)
  axios.doPost(endpoints.event, event)
    .then(res => {
      commit(ADD_NEW_EVENT_SUCCEEDED, res.payload)
      router.push('/')
    })
    .catch(err => {
      commit(ADD_NEW_EVENT_FAILED, err.payload)
    })
}

function editEvent({ commit }, event) {
  commit(UPDATE_EVENT)
  axios.doPut(endpoints.event, event)
    .then(res => {
      commit(UPDATE_EVENT_SUCCEEDED, res.payload)
      router.push('/')
    })
    .catch(err => {
      commit(UPDATE_EVENT_FAILED, err.payload)
    })
}

export default {
  getAllEvents,
  getEventDetails,
  addEvent
}