const local = 'http://localhost:3000'

const endpoints = {
  events: `${local}/events`,
  event: id => `${local}/events/${id}`
}