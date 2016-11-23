var express = require('express'); //importing express module
var app = express(); //creating an express application
const http = require('http');	
var bodyParser = require('body-parser');  //body-parser module required to parse body of request that server would recive.
var path = require('path');

 	logger = require('morgan'),			//for printing request and response logs
	bodyParser = require('body-parser'),	//parsing request body
	cookieParser = require('cookie-parser'),	//parsing cookie
	session = require('express-session');		//for maintaining sessions				

//var bcrypt =require('bcrypt');		//hashing passwords for auth
//var salt = bcrypt.genSaltSync(9);
//var hash = bcrypt.hashSync()
 
 var passwordHash = require('password-hash');


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: '$2202$', saveUninitialized: true, resave: true}));
app.use(express.static(__dirname + "/pages")); //configuring express application, setting the path for static files
app.set('port', 8080);



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


app.get('/',function (req, res) {


 //res.sendFile(__dirname + '/pages/login.html');
res.redirect('/login.html');
   
  /*
  console.log(req.session.doc);
  console.log("==============");
	console.log(req.cookies);
	console.log("==============");
	console.log(req.session.user.network[0]);
console.log("==============");
	console.log(req.session.user.network[1]);
*/
	




});

app.post('/login',function(req,res){
	var email = req.body.email;
	var password = req.body.pass;

	console.log(req.body);

	 db.users.findOne({email:req.body.email},function(err,doc){
  		req.session.user = doc;

  		if(passwordHash.verify(password,req.session.user.password)===true){
  				req.redirect('/dashboard');
  		}
})
	});


app.post('/register',function(req,res){
	var email = req.body.email;
	req.body.pass = passwordHash.generate(req.body.pass);

	db.users.insert(req.body, function(err, doc){ //query for inserting the response body.
	console.log("inserted : ");
	req.session.user = doc;
	console.log(doc);
	res.json(doc);
	console.log('=====')
	console.log(res);
	req.redirect('/dashboard');

	})

});



		//res.json(doc)
	//res.cookie('user',result);

 


/*
router.get('/session/set/:value', function(req, res) {
	req.session.mySession = req.params.value;
	res.send('session write success');
});



app.get('/login/:email',function(req,res){
  var emailid = req.params.email;
db.users.findOne({email:mongojs.email(emailid)},function(err,doc){
  res.json(doc);
})
});


app.get('/Bill/:email',function(req,res){
	var emailid = req.params.email;
	db.users.findOne({email:mongojs.email(emailid)},function(err,doc){
  var a = doc.fitbit.start_date
})
});

app.get('/session/get/', function(req, res) {
	if(req.session.mySession)
		res.send('the session value is: ' + req.session.mySession);
	else
		res.send("no session value");
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

  
 
*/


/*app.use('/',router);


    */

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
