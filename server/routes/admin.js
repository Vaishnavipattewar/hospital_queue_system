const express = require('express');
const router  = express.Router();
const { getStats, createUser, getUsers } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');

router.get('/stats',       protect, authorize('admin'), getStats);
router.get('/users',       protect, authorize('admin'), getUsers);
router.post('/create-user',protect, authorize('admin'), createUser);

module.exports = router;
