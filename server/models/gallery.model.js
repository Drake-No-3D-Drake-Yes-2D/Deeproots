var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var gallerySchema = new Schema({
    category: String, // short name of the category without spaces to use as URL slug
    title: String, // longer title shown to user
    description: String, // short description to show in the list
    content: String, // long description of the category that explains all the exciting parts
    art: [{ type : ObjectId, ref: 'Art' }], // array of art to be added later
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
