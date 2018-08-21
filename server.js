var express = require('express');
var bodyParser = require('body-parser');   //add this line


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));   //add this line
app.use(bodyParser.json());  //add this line

app.use(express.static('public'));

app.use(express.static(__dirname + '/node_modules'));

app.listen(8000,()=>{
    console.log('xxx')
});

// app.get('/:whattheuserwants', function(req, res) {
//     let whattheuserwants = req.params.whattheuserwants;
//     if(whattheuserwants === "about"){
//         res.send({data: "We are cool"})
//     } else if(whattheuserwants === "help"){
//         res.send({message: "We are here to help you because we are cool"})
//     } else{
//         res.send({error: "Sorry, not understood- not cool!"});
//     }
// });

app.get('/names/:name', function(request, response) {
    let Username = request.params.name;
    response.send('Hello ' + Username); 
});

app.get('/books', function(request, response) {
    var genretosearch = request.query.genre;
    var authortosearch = request.query.author;
    //let's pretend we have a function that queries our database and returns what it finds
    console.log(genretosearch, authortosearch);
    response.send(genretosearch + ' ' + authortosearch);
  });

app.get('/person', function(request, response) {
    let firstname = request.query.firstname;
    let lastname = request.query.lastname;
    response.send('Hello ' + firstname + ' ' + lastname);
});  


app.post('/user', function (request, response) {
    console.log(request.body);
    response.send('Hello ' + request.body.name + ' Thank you for joining');
});

app.post('/users', function(req, res) {
    console.log(req.body); 
    res.send("From server route");
  }); 