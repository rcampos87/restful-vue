const express = require('express')
const EventController = require('../controllers/event')
const router = express.Router()

router.get('/', EventController.get_event_by_id)
router.post('/create', EventController.post_new_event)
router.delete('/remove', EventController.remove_event_by_id)

module.exports = router
