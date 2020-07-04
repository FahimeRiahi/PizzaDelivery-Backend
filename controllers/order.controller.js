const Order = require('../models/order.model');


// Retrieve all orders from the database.
exports.findAll = (req, res) => {
    const searchText = req.query.searchTerm ? req.query.searchTerm.toLowerCase():'';
    Order.find()
        .then(orders => {
            if (searchText) {
                orders = orders.filter(function (value) {
                    const description = value.description.toString().toLowerCase();
                    return (name.match(searchText) || description.match(searchText));
                })
            }

            res.send({"status": "SUCCESSFUL", "data": orders, "totalCount": orders.length});
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving pizzas."
        });
    });
};

//Create new Order
exports.create = (req, res) => {
    // Request validation
    if (!req.body) {
        return res.status(400).send({
            message: "Order content can not be empty"
        });
    }

    // Create a Order
    const order = new Order({
        'address': req.body.address,
        'description': req.body.description,
        'totalPrice': req.body.totalPrice,
        'pizzas':req.body.pizzas
    });
    // Save Pizza in the database
    order.save(
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



