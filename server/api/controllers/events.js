const mongoose = require('mongoose')

const Event = require('../models/event')

exports.get_all_events = (req, res, next) => {
  Event.find()
    .select('name')
    .then(result => res.status(200).json(result))
    .catch(err => res.status(500).json({ message: err.message }))
}