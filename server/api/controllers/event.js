const mongoose = require('mongoose')
const Event = require('../models/event')
const successResponse = require('../utils/success')
const errorResponse = require('../utils/error')

exports.get_all_events = (req, res, next) => {
  Event.find()
    .select('name')
    .then(doc => res.status(200).json(successResponse(doc)))
    .catch(err =>
      res.status(500).json(errorResponse(err.message)),
    )
}

exports.get_event = (req, res, next) => {
  Event.find({ _id: req.params.id })
    .then(doc => {
      const result = doc[0]
      res.status(200).json(successResponse(result))
    })
    .catch(err =>
      res.status(500).json(errorResponse(err.message)),
    )
}

exports.post_event = (req, res, next) => {
  const eventPosted = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
    _id: mongoose.Types.ObjectId(),
  }

  const event = new Event(eventPosted)

  event
    .save()
    .then(doc => {
      res.status(201).json(successResponse(doc))
    })
    .catch(err =>
      res.status(500).json(errorResponse(err.message)),
    )
}

exports.put_event = (req, res, next) => {
  const updatedEvent = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
  }

  Event.findByIdAndUpdate(
    { _id: req.params.id },
    updatedEvent,
    (err, event) => {
      if (err) {
        return res
          .status(404)
          .json(errorResponse('Event not found'))
      }

      event
        .set(updatedEvent)
        .save()
        .then(doc =>
          res.status(200).json(successResponse(doc)),
        )
        .catch(err =>
          res.status(500).json(errorResponse(err.message)),
        )
    },
  )
}

exports.remove_event = (req, res, next) => {
  Event.remove({ _id: req.params.id })
    .then(doc => {
      res.status(200).json(successResponse())
    })
    .catch(err => res.status(404).json(errorResponse()))
}
