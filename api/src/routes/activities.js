const express = require('express');
const {activities,getActivy}= require('../controllers/activities.js');

const router = express.Router();

router.post('/',activities);
router.get('/',getActivy);

module.exports= router;