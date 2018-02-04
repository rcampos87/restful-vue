const express = require('express')
const EventController = require('../controllers/event')
const router = express.Router()

const event = '/:id'
const events = '/'

router.get(events, EventController.get_all_events)
router.post(events, EventController.post_event)

router.get(event, EventController.get_event)
router.put(event, EventController.put_event)
router.delete(event, EventController.remove_event)

module.exports = router
