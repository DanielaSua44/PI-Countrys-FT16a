const { Router}= require ('express');
const {getCountry,getCountryById, getName} = require('../controllers/countries');
const router = Router();

router.get('/',getCountry);
router.get('/countries?name=',getName);
router.get('/:id',getCountryById);

module.exports = router;