const express = require('express');
const activities= require('../controllers/activities.js');

const router = express.Router();

router.post('/activities',activities)

module.exports= router;