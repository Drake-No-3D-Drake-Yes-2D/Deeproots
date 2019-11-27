var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var workshopSchema = new Schema({
    title: String,
    description: String,
    location: String,
    date: Date,
    imageUrl: String,
    prices: [{
        title: String,
        price: Number
    }],
    seats: Number,
    seatsRemaining: Number,
    purchases: [{
        uid: String
    }],
    active: Boolean,
    created_at: Date
});

workshopSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    this.seatsRemaining = this.seats - this.purchases.length
    next();
});

var Workshop = mongoose.model('Workshop', workshopSchema);

module.exports = Workshop;
