var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var workshopSchema = new Schema({
    title: String, // title of the workshop
    description: String, // description, including description of pricing options
    location: String, // location as plaintext
    date: Date, // time, formatted JSON style in UTF time zone (yyyy-mm-dd)
    image_url: String, // url to image stored in another service
    prices: [{ type : ObjectId, ref: 'Price' }], // list of prices to be added later
    seats: Number, // number of seats remaining
    active: Boolean, // should the workshop be shown to users?
    created_at: Date
});

workshopSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
