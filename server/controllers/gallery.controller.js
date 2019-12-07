const Gallery = require('../models/gallery.model.js')
const Art = require('../models/art.model.js')

// get all categories
exports.categories = function (req, res) {
    Gallery.find({})
        .exec(function (err, categories) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(categories);
            }
        });
};

// get specific category
// populate art since we are now showing it
// saves DB calls to get art directly
exports.category = function (req, res) {
    Gallery.findOne({ category: req.params.category })
        .populate('art')
        .exec(function (err, category) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(category);
            }
        });
};

// insert category if does not exist
// edit category if it does
exports.upsertCategory = function (req, res) {
    Gallery.findOneAndUpdate(
        { category: req.params.category },
        req.body,
        { upsert: true, new: true },
        function (err, price) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(price);
            }
        }
    );
}

// add art to a category
exports.addArt = function (req, res) {
    var art = new Art(req.body);
    art.save(function (err, nart) {
        if (err) {
            res.status(500).send(err);
        } else {
            Gallery.findOneAndUpdate(
                { category: req.params.category },
                {
                    $addToSet: { art: nart.id }
                },
                { new: true },
                function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        return res.json(nart);
                    }
                }
            );
        }
    });
};