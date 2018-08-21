var express = require('express');
var bodyParser = require('body-parser');  
const queryapi = require('./queryapi'); 
const pathapi = require('./pathapi'); 
var request = require('request');
const weather = require('./weather');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json()); 
app.use('/', queryapi);
app.use('/', pathapi);
app.use('/', weather);

app.use(express.static('public'));

app.use(express.static(__dirname + '/node_modules'));

app.listen(8000,()=> {
    console.log('hey, it is your server');
});

app.post('/user', function (request, response) {
    console.log(request.body);
    response.send('Hello ' + request.body.name + ' Thank you for joining');
});

app.post('/users', function(req, res) { 
    request('http://www.naim.org.il', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body)
        }
    });
});

