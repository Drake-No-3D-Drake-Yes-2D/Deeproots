var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var artSchema = new Schema({
    title: String, // art title
    artist: String, // artist
    image_url: String, // image stored externally
    prices: [{ type : ObjectId, ref: 'Price' }], //prices to be added later
    has_original: Boolean, // does the art have an original able to be sold?
    active: Boolean, // shoulf the art be shown to the user?
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
