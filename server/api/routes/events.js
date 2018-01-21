const express = require('express')
const EventsController = require('../controllers/events')
const router = express.Router()

router.get('/', EventsController.get_all_events)

module.exports = router
