var express = require('express'); //importing express module
var app = express(); //creating an express application

const http = require('http');

var mongojs = require('mongojs'); //importing mongo js module
var db = mongojs('devclient:NoobDuck8080@ds149207.mlab.com:49207/cloudiaas', ['users']); 
//establishing connection to remote database , username : devclient , password : NoobDuck8080, database uri : ds149207.mlab.com:49207/cloudiaas
//'users' is the collection declared in database, on successful connection users collections reference is passed to variable db. 



db.on('error', function (err) {   //on connection error, method gets executed
    console.log('database error', err);
});
 
db.on('connect', function () {    //successful database connection will invoke this function
    console.log('database connected');
});

var bodyParser = require('body-parser');  //body-parser module required to parse body of request that server would recive.

app.use(express.static(__dirname + "/public")); //configuring express application, setting the path for static files
app.use(bodyParser.json());           //application would parse request body in json format




app.get('/login/:email',function(req,res){
  var emailid = req.params.email;
db.users.findOne({email:mongojs.email(emailid)},function(err,doc){
  res.json(doc);
})
});





app.get('/contactlist', function (req, res) { //function to execute when GET request is received on /contactlist route.
console.log("I recieved a get request")     
db.users.find(function (err, docs) {    //query for retrieving the response body.
console.log(docs);
res.json(docs);     //response in json format
});
});
  
app.post('/contactlist',function (req, res){  //function to execute when POST request is received on /contactlist route. 
console.log("request body = ");     
console.log(req.body);
db.users.insert(req.body, function(err, doc){ //query for inserting the response body.
console.log("inserted : ");
res.json(doc);    
})
}); 
  
app.delete('/contactlist/:id', function (req, res) {  //function to execute when delete request is received on /contactlist route with id in url.
var id = req.params.id;   //parsing id from request parameter
console.log("deleting : ");
console.log(id);
db.users.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {  //query to delete 
res.json(doc);
})
}); 
  
app.get('/contactlist/:id', function (req, res) { 
var id = req.params.id;
console.log(id);
db.users.findOne({_id: mongojs.ObjectId(id)}, function (err, doc) { //query to select one document from collection
res.json(doc);
})
});
  
app.put('/contactlist/:id', function (req, res) { 
var id = req.params.id;
console.log(req.body.name);
db.users.findAndModify({query: {_id: mongojs.ObjectId(id)},
update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
new: true}, function (err, doc) {
res.json(doc);
});
}); 
  
app.listen(8080); 

  //app.listen(3000);
    console.log("Server running at port 8080 using express");
