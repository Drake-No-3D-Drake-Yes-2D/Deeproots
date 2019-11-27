var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var contentSchema = new Schema({
    title: String,
    content: String,
    created_at: Date
});

contentSchema.pre('save', function (next) {
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});

var Content = mongoose.model('Content', contentSchema);

module.exports = Content;
