const express = require('express');
const router = express.Router();
const snailLogRoute = require('./snail_log.route');

// Add snail log route
router.use('/snail-log', snailLogRoute);

module.exports = router;