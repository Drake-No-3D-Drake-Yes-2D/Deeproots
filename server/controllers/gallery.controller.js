const Gallery = require('../models/gallery.model.js')
const Art = require('../models/art.model.js')
const Price = require('../models/price.model.js')
const Purchase = require('../models/purchase.model.js')

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

exports.category = function (req, res) {
    Gallery.find({ category: req.params.category })
        .populate('art')
        .exec(function (err, category) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(category);
            }
        });
};

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

exports.addArt = function (req, res) {
    var art = new Art(req.body);
    art.save(function (err, art) {
        if (err) {
            res.status(500).send(err);
        } else {
            Gallery.findOneAndUpdate(
                { category: req.params.category },
                {
                    $addToSet: { art: art.id }
                },
                { new: true },
                function (err, gallery) {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        return res.json(gallery);
                    }
                }
            );
        }
    });
};