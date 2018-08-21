const express = require('express');

const paramsrouter = express.Router();

paramsrouter.get('/pathapi/names/:name', function(request, response) {
    let Username = request.params.name;
    response.send('Hello ' + Username); 
});

module.exports = paramsrouter;