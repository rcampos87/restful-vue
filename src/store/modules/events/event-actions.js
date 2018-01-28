import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_SUCCEEDED,
  GET_ALL_EVENTS_FAILED,
  ADD_NEW_EVENT,
  ADD_NEW_EVENT_SUCCEEDED,
  ADD_NEW_EVENT_FAILED
} from './event-mutation-types'
import Axios from '../../../common/axios'
import router from '../../../router'
import endpoints from '../../../common/endpoints';

const axios = new Axios();

function getAllEvents({ commit }) {
  commit(GET_ALL_EVENTS)
  axios
    .doGet(endpoints.api.events)
    .then(res => {
      commit(GET_ALL_EVENTS_SUCCEEDED, res)
      if (res.length === 0) {
        router.push('/new')
      }
    })
    .catch(err => {
      commit(GET_ALL_EVENTS_FAILED, err)
      router.push('/new')
    })
}

function getEventDetails({ commit }) {

}

function addEvent({ commit }, event) {
  commit(ADD_NEW_EVENT, res)
  axios.doPost(endpoints.api.addEvent, event)
    .then(res => {
      commit(ADD_NEW_EVENT_SUCCEEDED, res)
      router.push('/')
    })
    .catch(err => {
      commit(ADD_NEW_EVENT_FAILED, err)
    })
}

export default {
  getAllEvents,
  getEventDetails,
  addEvent
}