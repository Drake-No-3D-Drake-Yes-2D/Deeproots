var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var purchaseSchema = new Schema({
    payment_uid: { type: String, unique: true },
    active: Boolean,
    created_at: Date
});

purchaseSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Purchase = mongoose.model('Purcahse', purchaseSchema);

module.exports = Purchase;
