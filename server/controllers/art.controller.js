const Art = require('../models/art.model.js')
const Price = require('../models/price.model.js')
const Purchase = require('../models/purchase.model.js')

// get all art
// include prices and purchases
exports.all = function (req, res) {
    Art.find({})
        .populate({
            path: 'prices',
            populate: {
                path: 'purchases',
                model: Purchase
            }
        })
        .exec(function (err, art) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(art);
            }
        });
};

// get specific art by ID
// include prices and purchases
exports.art = function (req, res) {
    Art.findById(req.params.artId)
        .populate({
            path: 'prices',
            populate: {
                path: 'purchases',
                model: Purchase
            }
        })
        .exec(function (err, art) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(art);
            }
        });
};

// patch an existing art
exports.edit = function (req, res) {
    Art.findByIdAndUpdate(
        req.params.artId,
        req.body,
        { new: true },
        function (err, art) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(art);
            }
        }
    );
}

// add a price
exports.addPrice = function (req, res) {
    var price = new Price.ArtPrice(req.body);
    price.save(function (err, nprice) {
        if (err) {
            res.status(500).send(err);
        } else {
            Art.findByIdAndUpdate(
                req.params.artId,
                {
                    $addToSet: { prices: nprice.id }
                },
                { new: true },
                function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        return res.json(nprice);
                    }
                }
            );
        }
    });
};