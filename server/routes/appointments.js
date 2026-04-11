const express = require('express');
const router  = express.Router();
const {
  bookAppointment,
  getAppointments,
  getAppointment,
  updateAppointment,
  getQueueStatus,
} = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/auth');

// Public – queue status board
router.get('/queue/:doctorId', getQueueStatus);

// Protected routes
router.route('/')
  .get(protect, getAppointments)
  .post(protect, authorize('patient'), bookAppointment);

router.route('/:id')
  .get(protect, getAppointment)
  .put(protect, updateAppointment);

module.exports = router;
