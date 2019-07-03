const insert = require('./insertData');
const express = require('express');
require('dotenv').config();
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 5001;

app.post('/mongo/cookie', function(req, res) {
    //get data
    var data = req.body;
    // console.log(data);
    //end request
    res.end("yes");
    //insert data to databse
    insert(data, 'cookie');
});

app.post('/mongo/tracking', function(req, res) {
    //get data
    var data = req.body;
    // console.log(data);
    //end request
    res.end("yes");
    //insert data to databse
    insert(data, 'tracking');
});
app.listen(port, () => {
    console.log("server running on port: " + port);
});