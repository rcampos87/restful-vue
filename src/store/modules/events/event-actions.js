import { GET_ALL_EVENTS } from './event-mutation-types'
import Axios from '../../../common/axios'
import router from '../../../router'
import endpoints from '../../../common/endpoints';

const axios = new Axios();

export function getAllEvents({ commit }) {
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

export function getEventDetails({ commit }) {

}