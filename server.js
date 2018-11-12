var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

// app.get('/', function(req, res){
//     res.send("Hello world")
// });

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {
    console.log("GET req received")

    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });




    // person1 = {
    //     name: 'Mayank',
    //     email: 'mayank@gmail.com',
    //     number: '123-456-789'
    // };

    // person2 = {
    //     name: 'Joe',
    //     email: 'Joe@gmail.com',
    //     number: '789-456-123'
    // };

    // var contactlist = [person1, person2];
    // res.json(contactlist);
});



app.listen(3000);
console.log("server running on port 3000");