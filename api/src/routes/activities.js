const express = require('express');
const {addActivy,getActivity}= require('../controllers/activities.js');

const router = express.Router();

router.post('/',addActivy);
router.get('/',getActivity);

module.exports= router;