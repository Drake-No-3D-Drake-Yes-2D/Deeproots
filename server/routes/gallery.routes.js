const gallery = require('../controllers/gallery.controller.js'),
    express = require('express'),
    router = express.Router()

router.route('/categories')
    .get(gallery.categories)

router.route('/categories/:category')
    .get(gallery.list)

router.route('/items')
    .post(gallery.add)

router.route('/items/:galleryId')
    .put(gallery.edit)
    .patch(gallery.buyOriginal)
    .delete(gallery.markInactive)

module.exports = router;