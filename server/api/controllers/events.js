const mongoose = require('mongoose')

const Event = require('../models/event')

const get_all_events = (req, res, next) => {
  Event.find()
    .select('name')
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ message: err.message }))
}

module.exports = {
  get_all_events,
}
