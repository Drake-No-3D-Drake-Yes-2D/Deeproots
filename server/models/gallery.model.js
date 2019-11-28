var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gallerySchema = new Schema({
    title: String,
    artist: String,
    category: String,
    imageUrl: String,
    originalPrice: Number,
    originalActive: Boolean,
    prices: [{
        title: String,
        price: Number
    }],
    active: Boolean,
    created_at: Date
});

gallerySchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
