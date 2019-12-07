const Workshop = require('../models/workshop.model.js')
const Price = require('../models/price.model.js')
const Purchase = require('../models/purchase.model.js')

// get all workshops
// include prices, purchases
exports.all = function (req, res) {
    Workshop.find({})
        .populate({
            path: 'prices',
            populate: {
                path: 'purchases',
                model: Purchase
            }
        })
        .sort('date')
        .exec(function (err, workshops) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(workshops);
            }
        });
};

// add a new workshop
exports.add = function (req, res) {
    var workshop = new Workshop(req.body);
    workshop.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(workshop);
        }
    });
};

// get a specific workshop
// include prices and purchases
exports.workshop = function (req, res) {
    Workshop.findById(req.params.workshopId)
        .populate({
            path: 'prices',
            populate: {
                path: 'payments',
                model: Purchase
            }
        })
        .exec(function (err, workshop) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(workshop);
            }
        });
};

// edit a worksop
exports.edit = function (req, res) {
    Workshop.findByIdAndUpdate(
        req.params.workshopId,
        req.body,
        { new: true },
        function (err, workshop) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(workshop);
            }
        }
    );
}

// add a price to a workshop
// creates a new price
exports.addPrice = function (req, res) {

    var price = new Price.WorkshopPrice(req.body);
    price.save(function (err, nprice) {
        if (err) {
            res.status(500).send(err);
        } else {
            Workshop.findByIdAndUpdate(
                req.params.workshopId,
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