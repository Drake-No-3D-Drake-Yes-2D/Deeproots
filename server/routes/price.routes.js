const price = require('../controllers/price.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/')
    .get(price.all) //get all prices

router.route('/:priceId')
    .get(price.price) //get a specific price
    .put(price.edit) //edit an existing price

router.route('/:priceId/purchases')
    .post(price.addPurchase) //add a purchases to the price //returns a link to the purchase

module.exports = router;