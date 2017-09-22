const express = require('express');
const router = express.Router();

router.use('/comments', require('./comments'));
router.use('/locations', require('./locations'));

module.exports = router;
