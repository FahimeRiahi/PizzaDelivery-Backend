module.exports = (app) => {
    const pizzas = require('./controllers/pizza.controller.js');
    const order = require('./controllers/order.controller.js');

    // Retrieve all Pizzas
    app.get('/pizzas', pizzas.findAll);

    // Create a new Pizza
    app.post('/pizzas', pizzas.create);

    // Retrieve all orders
    app.get('/orders', order.findAll);

    // Create a new order
    app.post('/order', order.create);
}
