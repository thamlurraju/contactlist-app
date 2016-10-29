var express=require("express");
var app=express();
var mongoose=require("mongoose");

var contact=require("./models/contact");
var bodyparser=require("body-parser");


mongoose.connect("mongodb://localhost/contactlist",function(){
	console.log("successfully connected to mongodb")
})
var PORT=process.env.PORT || 4000;
app.use(express.static(__dirname+"/public"))
app.use(bodyparser.json());

app.get("/contactlist",function(req,res){
	contact.getcontacts(function(err,data){
		if(err){
			throw err;
		}

		res.json(data);
	})
})

app.post("/contactlist",function(req,res){
 var body=req.body;
 //will fectch body details
 contact.addcontact(body,function(err,data){
 	if(err){
 		throw err;
 	}
 	
 	res.json(data);//if you write send(path) then file get the data
 })
})

app.get("/contactlist/:id",function(req,res){
	var id=req.params.id;

	contact.getContactById(id,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})

app.put("/contactlist/:id",function(req,res){
	var id= req.params.id;
	var body=req.body;
	contact.updateContact(id,body,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})

app.delete("/contactlist/:id",function(req,res){
	var id= req.params.id;
 
	contact.removeContact(id,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})
})

app.listen(PORT,function(){
	console.log("port number is"+PORT)
})



//$scope is passing the data