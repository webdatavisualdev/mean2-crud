var express = require('express');
var router = express.Router();
var expressValidate = require('express-validation');
var snailLogController = require('../controllers/snail_log.controller');
var snailLogValidation = require('../validations/snail_log.validation');

/* Create a snail log with the result */
router.post('/', expressValidate(snailLogValidation.create), snailLogController.create);

module.exports = router;