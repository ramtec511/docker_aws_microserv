var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo/mydatabase";
MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    console.log("¡Base de datos conectada!: ",db.options.dbName);
    db.close();
});