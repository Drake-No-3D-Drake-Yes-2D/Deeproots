const purchase = require('../controllers/purchase.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/')
    .get(purchase.all) //get all purchases

router.route('/:purchaseId')
    .get(purchase.purchase) //get a specific purchase
    .put(purchase.edit) //edit a purchase

module.exports = router;