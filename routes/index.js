const express = require('express')
const router = express.Router()
const GiftList = require('../controllers/GiftListController')
const HealthCheck = require('../controllers/HealthCheck')

router.get('/health', HealthCheck.healthCheck)
router.get('/giftdetails', GiftList.details);
router.post('/gift', GiftList.create);
router.put('/gift/:id', GiftList.update);
router.delete('/gift/:id', GiftList.delete);


module.exports = router