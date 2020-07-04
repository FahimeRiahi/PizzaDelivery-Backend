var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://fahimeriahi:fahimeriahi_123@cluster0-4q7lb.mongodb.net/PizzaDelivery?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("fahimeriahi");
    dbo.createCollection("pizzaDelivery", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
