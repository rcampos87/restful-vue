const mongoose = require('mongoose')

const Event = require('../models/event')

exports.get_event_by_id = (req, res, next) => {
  Event.find({ _id: req.body.id })
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ message: err.message }))
}

exports.post_new_event = (req, res, next) => {
  console.log(req.body)
  const eventPosted = {
    name: req.body.name,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
  }

  const event = new Event()

  event
    .save(eventPosted)
    .then(result => {
      res.status(201).json(result)
    })
    .catch(err =>
      res.status(500).json({
        message: err.message,
      }),
  )
}

exports.remove_event_by_id = (req, res, next) => {
  Event.remove({ _id: req.body.id })
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err =>
      res.status(500).json({
        message: err.message,
      }),
  )
}
