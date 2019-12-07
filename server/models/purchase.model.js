var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var purchaseSchema = new Schema({
    payment_uid: { type: String, unique: true }, // unique to prevent duplicates
    active: Boolean, // set false to cancel the transaction
    created_at: Date
});

purchaseSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
