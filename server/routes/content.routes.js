const content = require('../controllers/content.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/:title')
    .get(content.latest) //get the latest updated content
    .post(content.add) //update content by adding a new version

module.exports = router;