var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var gallerySchema = new Schema({
    category: String,
    title: String,
    description: String,
    content: String,
    art: [{ type : ObjectId, ref: 'Art' }],
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
