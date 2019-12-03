var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var workshopSchema = new Schema({
    title: String,
    description: String,
    location: String,
    date: Date,
    image_url: String,
    prices: [{ type : ObjectId, ref: 'Price' }],
    seats: Number,
    active: Boolean,
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
