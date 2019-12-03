const Purchase = require('../models/purchase.model.js')

exports.all = function (req, res) {
    Purchase.find({})
        .exec(function (err, purchases) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(purchases);
            }
        });
};

exports.purchase = function (req, res) {
    Purchase.findById(req.params.purchaseId)
        .exec(function (err, purchase) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(purchase);
            }
        });
};

exports.edit = function (req, res) {
    Purchase.findByIdAndUpdate(
        req.params.purchaseId,
        req.body,
        { new: true },
        function (err, purchase) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(purchase);
            }
        }
    );
};