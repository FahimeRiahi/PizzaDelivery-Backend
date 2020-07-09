const mongoose = require('mongoose');
const PizzaSchema = require('../models/pizza.model').schema;
const AddressSchema = require('../models/address.model').schema;

const OrderSchema = mongoose.Schema({
    address: AddressSchema,
    totalPrice: {type: Number, required: true},
    description: {type: String},
    pizzas:[{pizza:PizzaSchema,count:Number}],
}, {
    timestamps: true
});

module.exports = mongoose.model('Orders', OrderSchema);
