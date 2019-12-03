var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var artSchema = new Schema({
    title: String,
    artist: String,
    image_url: String,
    prices: [{ type : ObjectId, ref: 'Price' }],
    has_original: Boolean,
    active: Boolean,
    created_at: Date
});

artSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Art = mongoose.model('Art', artSchema);

module.exports = Art;
