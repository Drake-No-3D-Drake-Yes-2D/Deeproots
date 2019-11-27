const Workshop = require('../models/workshop.model.js')

exports.current = function (req, res) {
    Workshop.find({ active: true })
        .where('date').gte(new Date())
        .sort('created_at')
        .exec(function (err, workshops) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.json(workshops);
            }
        });
};

exports.add = function (req, res) {
    var workshop = new Workshop(req.body);
    workshop.purchases = [];
    workshop.active = true;
    workshop.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(workshop);
        }
    });
};

exports.cancelWorkshop = function (req, res) {
    Workshop.findByIdAndUpdate(
        req.params.workshopId,
        { active: false },
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

exports.edit = function (req, res) {
    update = {}
    if (req.body.title) {
        update.title = req.body.title;
    }
    if (req.body.description) {
        listing.description = req.body.description;
    }
    if (req.body.location) {
        listing.location = req.body.location;
    }
    if (req.body.date) {
        listing.date = req.body.date;
    }
    if (req.body.imageUrl) {
        listing.imageUrl = req.body.imageUrl;
    }
    if (req.body.prices) {
        listing.prices = req.body.prices;
    }
    if (req.body.seats) {
        listing.seats = req.body.seats;
    }
    Workshop.findByIdAndUpdate(
        req.params.workshopId,
        update,
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

exports.addPurchase = function (req, res) {
    purchase = {
        uid: req.body.uid,
        active: true
    }
    Workshop.findByIdAndUpdate(
        req.params.workshopId,
        {
            $addToSet: { purchases: purchase }
        },
        { new: true },
        function (err, workshop) {
            if (err) {
                return res.status(500).send(err);
            } else {
                return res.json(workshop);
            }
        }
    );
};