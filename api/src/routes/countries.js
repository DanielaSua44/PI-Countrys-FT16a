const { default: axios } = require('axios');
const { Router}= require ('express');
const {getCountry,getCountryById} = require('../controllers/countries');
const router = Router();


router.get('/',getCountry);
router.get('/:id',getCountryById);

module.exports = router;