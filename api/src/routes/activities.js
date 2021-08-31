const express = require('express');
const postActibity = require('../controllers/activities');

var router = express.Router();

router.post('/activities',postActibity)

module.exports= router;