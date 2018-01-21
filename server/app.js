const express = require('express')
const logger = require('morgan')
const parser = require('body-parser')
const mongoose = require('mongoose')
const eventsRoute = require('./api/routes/events')
const eventRoutes = require('./api/routes/event')

const app = express()

mongoose.connect('mongodb://localhost/restful-vue')

app.use(logger('dev'))

app.use(parser.urlencoded({ extended: false }))
app.use(parser.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, Content-Type, Accept, Authorization',
  )

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    return res.status(200).json({})
  }

  next()
})

app.use('/events', eventsRoute)
app.use('/event', eventRoutes)

app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404

  next(error)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    status: err.status,
    message: err.message,
  })
})

module.exports = app
