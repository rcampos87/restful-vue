import { GET_ALL_EVENTS } from './event-mutation-types'
import Axios from '../../../common/axios'
import router from '../../../router'
import endpoints from '../../../common/endpoints';

const axios = new Axios();

function getAllEvents({ commit }) {
  axios
    .doGet(endpoints.api.events)
    .then(res => {
      commit(GET_ALL_EVENTS, res)
      if (res.length === 0) {
        router.push('/new')
      }
    })
    .catch(err => {
      router.push('/new')
    })
}

function getEventDetails({ commit }) {

}

function addEvent({ commit }, event) {
  axios.doPost(endpoints.api.addEvent, event)
    .then(res => {
      router.push('/')
    })
}

export default {
  getAllEvents,
  getEventDetails,
  addEvent
}