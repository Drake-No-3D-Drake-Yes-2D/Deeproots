const content = require('../controllers/content.controller.js'),
  express = require('express'),
  router = express.Router()

router.route('/:title')
  .get(content.latest)
  .post(content.add)

module.exports = router;