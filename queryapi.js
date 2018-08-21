const express = require('express');

const newRouter = express.Router();

newRouter.get('/queryapi/person', function(request, response) {
    let firstname = request.query.firstname;
    let lastname = request.query.lastname;
    response.send('Hello ' + firstname + ' ' + lastname);
});

newRouter.get('/queryapi/books', function(request, response) {
    var genretosearch = request.query.genre;
    var authortosearch = request.query.author;
    console.log(genretosearch, authortosearch);
    response.send(genretosearch + ' ' + authortosearch);
  });

module.exports = newRouter;