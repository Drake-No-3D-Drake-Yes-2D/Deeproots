const art = require('../controllers/art.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/')
    .get(art.all) //get all art

router.route('/:artId')
    .get(art.art) //get a specific artwork
    .put(art.edit) //edit an artwork

router.route('/:artId/prices')
    .post(art.addPrice) //add a price to an artwork //returns a link to the price

module.exports = router;