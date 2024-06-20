const express = require("express");
const router = express.Router();
const controller = require('../controllers/spaceController');

router.get('/', controller.space);
router.get('/surface', controller.surface);
router.put('/report', controller.createReport);

module.exports = router;