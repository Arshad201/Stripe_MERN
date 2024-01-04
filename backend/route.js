const express = require('express');
const { checkout, verification, geKey } = require('./controller');
const router = express.Router();


router.post('/checkout', checkout)
router.post('/verification', verification)
router.get('/getkey', geKey)

module.exports = router

