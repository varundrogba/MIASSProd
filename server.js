var express = require('express'); //importing express module
var app = express(); //creating an express application
const http = require('http');	
var session= require('express-session');
var bodyParser = require('body-parser');  //body-parser module required to parse body of request that server would recive.
var path = require('path');


logger = require('morgan'),			//for printing request and response logs
bodyParser = require('body-parser'),	//parsing request body
cookieParser = require('cookie-parser'),	//parsing cookie			


app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + "/pages")); //configuring express application, setting the path for static files
app.set('port', 8080);
app.use(session({
    secret:'secret',
    saveUninitialized:false,
    resave:false,
    HttpOnly:false,
}));



var mongojs = require('mongojs'); //importing mongo js module
var db = mongojs('devclient:NoobDuck8080@ds149207.mlab.com:49207/cloudiaas', ['users']); 
//establishing connection to remote database , username : devclient , password : NoobDuck8080, database uri : ds149207.mlab.com:49207/cloudiaas
//'users' is the collection declared in database, on successful connection users collections reference is passed to variable db. 
var ses_data;




db.on('error', function (err) {   //on connection error, method gets executed
    console.log('database error', err);
});
 
db.on('connect', function () {    //successful database connection will invoke this function
    console.log('/n/n/ndatabase connected/n/n/n');
});


app.get('/',function (req, res) {

res.redirect('/landing.html');

});


/*-------------------previous document structure
    network: [
        {
            name: "",
            active: false,
            count: 0,
            start_date: "",
            end_date: ""
        },
    ]*/
//--------------------------------- user registration
app.post('/registerNewUser',function(req,res){
	console.log(req.body);
	db.users.insert({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    due_bill: "0$",
    fitbit:[],
    car:[],
    plane:[]
    },
    function(err,docs){
		res.json(docs);
	});
//	var password=req.body.password;
	//var confrimpassword=req.body.password;
});

//------------------- user authentication
app.get('/userAuthenticationMethod/:email/:password',function(req,res){
    
    console.log('Received user details...');
    //console.log(req.params.emailid);
    //emailid = req.body.email;
    //pass = req.body.password;
    db.users.findOne({"email": req.params.email} ,function(err,docs){
      //console.log(docs);
        
        flag="invalid";
        if(docs.email==req.params.email && docs.password==req.params.password){
          //  console.log(docs)
         flag="vaild";
         ses_data=req.session;
         ses_data.mail=req.params.email;
         console.log("from server session data"+ses_data.mail);
         //console.log(ses_data.mail);
           res.send("success");
        }
        else
        {
            console.log("invalid email or password");
            res.send("no_success");
        }
       
    })
});

//--------session check request
app.get('/session_req_sensor_controller',function(req,res){
    console.log('I received a session check request');
    ses_data=req.session;
    console.log(ses_data.mail);
    if(ses_data.mail){

        res.send(ses_data.mail);
    }
    else
    {
        res.send("not exists...");
    }
   // console.log(ses_data.email);
});


//-----------------fitbit sensor addition 


app.post('/new_fitbit/:response/:date',function(req,res){
    console.log("For new fitbit:" + req.params.response);
    console.log("For new fitbit:" + req.params.date);
    db.users.update(
       { "email": req.params.response },
       { $addToSet: { fitbit: {
            start_date:req.params.date,
        } } }
    );

    res.send("Fitbit added");
});


//--------------------- to remove fitbit sensor 


app.post('/stop_fitbit/:response/:date',function(req,res){  
    var fitbit_array;
    var start_date;
    console.log("For new fitbit:" + req.params.response);
    console.log("For new fitbit:" + req.params.date);


    db.users.find({"email":req.params.response},function(err,docs){
        console.log(docs[0].fitbit[0].start_date);
        db.sensor_usage.insert({
                "email":req.params.response,
                "sensor_name":"fitbit",
                "start_date":docs[0].fitbit[0].start_date,
                "end_date":req.params.date       
        });
        db.users.update({"email":req.params.response}, { $pop: { "fitbit": -1 } } );
        
    });

    res.send("Fitbit stopped");
});



//-----------------plane sensor addition

app.post('/new_plane/:response/:date',function(req,res){
    console.log("For new fitbit:" + req.params.response);
    console.log("For new fitbit:" + req.params.date);
    db.users.update(
       { "email": req.params.response },
       { $addToSet: { plane: {
            start_date:req.params.date,
        } } }
    );

    res.send("Plane added");
});


//--------------------- to remove plane sensor 


app.post('/stop_plane/:response/:date',function(req,res){  
    var fitbit_array;
    var start_date;
    console.log("For plane:" + req.params.response);
    console.log("For end_date plane:" + req.params.date);


    db.users.find({"email":req.params.response},function(err,docs){
        console.log(docs[0].plane[0].start_date);
        db.sensor_usage.insert({
                "email":req.params.response,
                "sensor_name":"plane",
                "start_date":docs[0].plane[0].start_date,
                "end_date":req.params.date       
        });
        db.users.update({"email":req.params.response}, { $pop: { "plane": -1 } } );
        
    });

    res.send("plane stopped");
});

//-------------- car sensor addition

app.post('/new_car/:response/:date',function(req,res){
    console.log("For new fitbit:" + req.params.response);
    console.log("For new fitbit:" + req.params.date);
    db.users.update(
       { "email": req.params.response },
       { $addToSet: { car: {
            start_date:req.params.date,
        } } }
    );

    res.send("Car added");
});

//--------------------- to remove car sensor 


app.post('/stop_car/:response/:date',function(req,res){  
    var fitbit_array;
    var start_date;
    console.log("For car:" + req.params.response);
    console.log("For car:" + req.params.date);


    db.users.find({"email":req.params.response},function(err,docs){
        console.log(docs[0].car[0].start_date);
        db.sensor_usage.insert({
                "email":req.params.response,
                "sensor_name":"car",
                "start_date":docs[0].car[0].start_date,
                "end_date":req.params.date       
        });
        db.users.update({"email":req.params.response}, { $pop: { "car": -1 } } );
        
    });

    res.send("Car stopped");
});


//---------------------------billing 

app.get('/billing_data_query/:email',function(req,res){
    
 		console.log("in sensor for billing:"+req.params.email);
 		//res.send("from ensor for billing");
 		db.sensor_usage.find({"email":req.params.email},function(err,docs){
 			//console.log(docs[0]);
 			res.json(docs);
 		});
});


//---------------------- user metrics inactive sensor sensors
app.get('/user_metrics_query/:email',function(req,res){
    
 		console.log("in sensor for metrics:"+req.params.email);
 		//res.send("from ensor for billing");
 		db.sensor_usage.find({"email":req.params.email},function(err,docs){
 			console.log("inactive total ------"+docs.length);
 			res.json(docs);
 		});
});


//------------------- user metrics active sensors
app.get('/user_activeSensor_query/:email',function(req,res){
    
 		console.log("in sensor for metrics:"+req.params.email);
 		//res.send("from ensor for billing");
 		db.users.find({"email":req.params.email},function(err,docs){
 			console.log(docs[0]);
 			res.json(docs);
 		});
});


//------------------------- user metrics total sensors
app.get('/user_total_Sensor_query/:email',function(req,res){
    
 		console.log("in sensor for metrics:"+req.params.email);
 		//res.send("from ensor for billing");
 		db.users.find({"email":req.params.email},function(err,docs){
 			console.log("total-----"+docs[0].fitbit.length);
 			var fitbit_length=docs[0].fitbit.length;
 			var car_length=docs[0].car.length;
 			var plane_length=docs[0].plane.length;
 			db.sensor_usage.find({"email":req.params.email},function(err,docs){
 				console.log("inactive total ------"+docs.length);
 				var try_length =docs.length;
 				for(i=0;i<try_length;i++)
 				{
 					if(docs[i].sensor_name=="fitbit")
 					{
 						fitbit_length=fitbit_length+1;
 					}
 					else if(docs[i].sensor_name=="plane")
 					{
 						plane_length=plane_length+1;	
 					}
 					else if(docs[i].sensor_name=="car")
 					{
 					 	car_length=car_length+1;	
 					}
 				}
 				console.log("try_length----"+fitbit_length);
 				res.send([fitbit_length,car_length,plane_length]);
 			});
 			//res.json(docs);
 		});


});


//------------------------- admin authentication

app.get('/admin_auth/:email/:password',function(req,res){


    db.admin.find({"email": req.params.email} ,function(err,docs){
      //console.log(docs[0].email);

        if(docs[0].email.toString()==req.params.email && docs[0].password.toString()==req.params.password){
          //  console.log(docs)
           res.send("success");
        }
        else
        {
            console.log("invalid email or password");
            res.send("no_success");
        }
       
    })

//    res.send("got the admin request");
});


//---------------------------- admin analysis data

//--------------active sensors
app.get('/user_rec',function(req,res){
    console.log("request accepted----------");
    db.users.find({},function(err,docs){
          console.log(docs);
          res.json(docs);
    });
 

});

//------------ inactive sensors
app.get('/inactive_sensors_data',function(req,res){
    console.log("request accepted----------");
    db.sensor_usage.find({},function(err,docs){
          console.log(docs);
          res.json(docs);
    });
 

});


//------------ add total due_amount
app.post('/total_due/:response/:due_amount',function(req,res){
    console.log("Email:-------------------" + req.params.response);
    console.log("Due:---------------------" + req.params.due_amount);
    db.users.findAndModify({
        query :{"email": req.params.response},
       update :{ $set: { "due_bill": req.params.due_amount } },
       new: true}, function (err, doc)
       {
        res.json(doc);
       }
    );
});

//--------------------------------------------------------------

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
