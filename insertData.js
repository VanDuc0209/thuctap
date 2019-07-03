var MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
url = process.env.URL_DB || 'mongodb://localhost:27017';
db_name = process.env.DB_NAME || 'thuctap';
console.log(db_name)
console.log(url)

function insert_data(data, collection) {
    //Connection DB
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        //Creat DB
        console.log(data)
            //Use db_name
        dbo = db.db(db_name);
        // //insert data
        dbo.collection(collection).insert(data, function(err, res) {
            if (err) throw errr;
            console.log("insert done");
            console.log("Number of documets inserted: " + res.insertedCount);
            db.close();
        })
    });
};
// data = [
//     { name: 'John', address: 'Highway 71' },
//     { name: 'Peter', address: 'Lowstreet 4' },
//     { name: 'Amy', address: 'Apple st 652' },
//     { name: 'Hannah', address: 'Mountain 21' },
//     { name: 'Michael', address: 'Valley 345' },
//     { name: 'Sandy', address: 'Ocean blvd 2' },
//     { name: 'Betty', address: 'Green Grass 1' },
//     { name: 'Richard', address: 'Sky st 331' },
//     { name: 'Susan', address: 'One way 98' },
//     { name: 'Vicky', address: 'Yellow Garden 2' },
//     { name: 'Ben', address: 'Park Lane 38' },
//     { name: 'William', address: 'Central st 954' },
//     { name: 'Chuck', address: 'Main Road 989' },
//     { name: 'Viola', address: 'Sideway 1633' }
// ];
// insert_data(data)
module.exports = insert_data