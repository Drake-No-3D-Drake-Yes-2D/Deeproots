const workshop = require('../controllers/workshop.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/')
    .get(workshop.all) //get all workshops
    .post(workshop.add) //add a new workshop //returns a link to the workshop

router.route('/:workshopId')
    .get(workshop.workshop) //get a specific workshop
    .put(workshop.edit) //edit an existing workshop

router.route('/:workshopId/prices')
    .post(workshop.addPrice) //add a price to a workshop //returns a link to the price

module.exports = router;