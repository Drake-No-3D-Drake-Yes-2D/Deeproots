const Content = require('../models/content.model.js')

// get latest content with given title
exports.latest = function (req, res) {
    Content
        .findOne({ 'title': req.params.title })
        .sort({ 'created_at': 'descending' })
        .exec(function (err, content) {
            if (err || content === null) {
                res.status(404).send(err);
            } else {
                res.send(content.content)
            }
        });
};

// add a new piece of content
// or: update an existing content
// (by adding a newer version for latest to retrieve)
// this keeps version history in the db
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