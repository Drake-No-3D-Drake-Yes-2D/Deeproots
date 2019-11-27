const workshop = require('../controllers/workshop.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/')
  .get(workshop.current)
  .post(workshop.add)

router.route('/:workshopId')
  .put(workshop.edit)
  .patch(workshop.cancelWorkshop)

router.route('/:workshopId/purchases')
  .post(workshop.addPurchase)

module.exports = router;