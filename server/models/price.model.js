var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

var options = { discriminatorKey: 'kind' };

var priceSchema = new Schema({
    title: String,
    price: Number,
    active: Boolean,
    purchases: [{ type: ObjectId, ref: 'Purchase' }],
    created_at: Date
});

priceSchema.pre('save', function (next) {
    if (!this.created_at) {
        this.created_at = new Date();
    }
    next();
});

var Price = mongoose.model('Price', priceSchema);

module.exports.Price = Price;

module.exports.ArtPrice = Price.discriminator('ArtPrice',
    new Schema({ original: Boolean }, options));

module.exports.WorkshopPrice = Price.discriminator('WorkshopPrice',
    new Schema({ seats: Number }, options));