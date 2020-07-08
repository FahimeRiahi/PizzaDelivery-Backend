const mongoose = require('mongoose');

const PizzaSchema = mongoose.Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String , required: true},
    image: {type: String , required: true},
    price: {type: Number, required: true},
    ingredients:[{name: String , ingredients: [{name: String, ingredients:[{name:String, ingredients:[{name:String,ingredients:[]}]}]}]}]

}, {
    timestamps: true
});

module.exports = mongoose.model('Pizzas', PizzaSchema);
