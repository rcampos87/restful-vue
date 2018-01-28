import { reduce } from 'lodash-es'
const local = 'http://localhost:3000'

const endpoints = {
  events: '/events'
}

function getEndpoints() {
  return reduce(endpoints, (reduce, value, key) => ({ [key]: `${local}${value}` }), {})
}

export default {
  api: getEndpoints()
}