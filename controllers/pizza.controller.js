const Pizza = require('../models/pizza.model');
// Retrieve all pizzas from the database.
exports.findAll = (req, res) => {
    const searchText = req.query.searchTerm ? req.query.searchTerm.toLowerCase():'';
    Pizza.find()
        .then(pizzas => {
            if (searchText) {
                pizzas = pizzas.filter(function (value) {
                    const name = value.name.toLowerCase();
                    const description = value.description.toString().toLowerCase();
                    return (name.match(searchText) || description.match(searchText));
                })
            }

            res.send({"status": "SUCCESSFUL", "data": pizzas, "totalCount": pizzas.length});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving pizzas."
        });
    });
};
//Create new Pizza
exports.create = (req, res) => {
    // Request validation
    if (!req.body) {
        return res.status(400).send({
            message: "Pizza content can not be empty"
        });
    }

    // Create a Pizza
    const pizza = new Pizza({
        'name': req.body.name,
        'description': req.body.description,
        'price': req.body.price,
        'image': req.body.image,
        'type': req.body.type
    });
    // Save Pizza in the database
    pizza.save(
        (err, data) => {
            if(data) {
                res.send({"status": "SUCCESSFUL", "data": data});
            }
            else
            {
                res.send({"status": "FAILED", err});
            }
        }
    )
};



