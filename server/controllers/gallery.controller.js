const Gallery = require('../models/gallery.model.js')

exports.categories = function (req, res) {
    Gallery.distinct(
        'category',
        {},
        function (err, items) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(items);
            }
        });
}

exports.list = function (req, res) {
    Gallery.find({ category: req.params.category, active: true })
        .sort('created_at')
        .exec(function (err, items) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(items);
            }
        });
};

exports.add = function (req, res) {
    var gallery = new Gallery(req.body);
    gallery.active = true;
    gallery.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(gallery);
        }
    });
};

exports.markInactive = function (req, res) {
    Gallery.findByIdAndUpdate(
        req.params.galleryId,
        { active: false },
        { new: true },
        function (err, item) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(item);
            }
        }
    );
}

exports.edit = function (req, res) {
    console.log(req.body)
    update = {}
    if (req.body.title) {
        update.title = req.body.title;
    }
    if (req.body.artist) {
        update.artist = req.body.artist;
    }
    if (req.body.category) {
        update.category = req.body.category;
    }
    if (req.body.imageUrl) {
        update.imageUrl = req.body.imageUrl;
    }
    if (req.body.originalPrice) {
        update.originalPrice = req.body.originalPrice;
    }
    if (req.body.originalActive) {
        update.originalActive = req.body.originalActive;
    }
    if (req.body.prices) {
        update.prices = req.body.prices;
    }
    Gallery.findByIdAndUpdate(
        req.params.galleryId,
        update,
        { new: true },
        function (err, item) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(item);
            }
        }
    );
}

exports.buyOriginal = function (req, res) {
    Gallery.findByIdAndUpdate(
        req.params.galleryId,
        {
            originalActive: false
        },
        { new: true },
        function (err, item) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(item);
            }
        }
    );
};