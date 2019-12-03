const PriceModels = require('../models/price.model.js')
const Purchase = require('../models/purchase.model.js')
const Price = PriceModels.Price;

exports.all = function (req, res) {
    Price.find({})
        .exec(function (err, prices) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(prices);
            }
        });
};

exports.price = function (req, res) {
    Price.findById(req.params.priceId)
        .exec(function (err, price) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(price);
            }
        });
};

exports.edit = function (req, res) {
    Price.findByIdAndUpdate(
        req.params.priceId,
        req.body,
        { new: true },
        function (err, price) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(price);
            }
        }
    );
}

exports.addPurchase = function (req, res) {
    var purchase = new Purchase(req.body);
    purchase.save(function (err, npurchase) {
        if (err) {
            res.status(500).send(err);
        } else {
            Price.findByIdAndUpdate(
                req.params.priceId,
                {
                    $addToSet: { purchases: npurchase.id }
                },
                { new: true },
                function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        return res.json(npurchase);
                    }
                }
            );
        }
    });
};