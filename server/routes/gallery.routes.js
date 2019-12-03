const gallery = require('../controllers/gallery.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/')
    .get(gallery.categories) //returns all categories

router.route('/:category')
    .get(gallery.category) //returns a specific category
    .put(gallery.upsertCategory) //creates or modifies a category

router.route('/:category/art')
    .post(gallery.addArt) //create a new artwork in this category //returns a link to the artwork

module.exports = router;