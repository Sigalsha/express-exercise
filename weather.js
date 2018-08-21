const express = require('express');
var request = require('request');

const weatherroute = express.Router();

weatherroute.get('/weather', function(req, res) {
    request('http://api.apixu.com/v1/current.json?key=9e30a8992e0d45fb864153729181908&q=london', function(error, response, body){
        if (!error && response.statusCode == 200) {
            res.send(JSON.parse(body));
        }    
    });
});

module.exports = weatherroute;