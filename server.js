var express = require('express'); //importing express module
var app = express(); //creating an express application
const http = require('http');	
var bodyParser = require('body-parser');  //body-parser module required to parse body of request that server would recive.
var path = require('path');

 	logger = require('morgan'),			//for printing request and response logs
	bodyParser = require('body-parser'),	//parsing request body
	cookieParser = require('cookie-parser'),	//parsing cookie
	session = require('express-session');		//for maintaining sessions				




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
    console.log('/n/n/ndatabase connected/n/n/n');
});


app.get('/',function (req, res) {

res.redirect('/login.html');

});

app.post('/registerNewUser',function(req,res){
	console.log(req.body);
	db.users.insert({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    due_bill: "0$",
    network: [
        {
            name: "",
            active: false,
            count: 0,
            start_date: "",
            end_date: ""
        },
    ]},

    function(err,docs){
		res.json(docs);
	});
//	var password=req.body.password;
	//var confrimpassword=req.body.password;
});





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
