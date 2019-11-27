const Content = require('../models/content.model.js')

exports.latest = function (req, res) {
    Content
        .findOne({ 'title': req.params.title })
        .sort({ 'created_at': 'descending' })
        .exec(function (err, content) {
            if (err) {
                res.status(404).send(err);
            } else {
                res.send(content.content)
            }
        });
};

exports.add = function (req, res) {
    var content = new Content({
        title: req.params.title,
        content: req.body.content,
    });
    content.save(function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(content);
        }
    });
};