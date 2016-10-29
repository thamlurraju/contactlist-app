var mongoose=require("mongoose");
var contactschema=mongoose.Schema({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	mobile:{
		type:String,
		required:true
	}
});

//exports is exporting module and contact for contacts
var Contact=module.exports=mongoose.model("contact",contactschema);

module.exports.getcontacts=function(callback){
//this find()is mongoose method
Contact.find(callback)
}

module.exports.addcontact=function(contact,callback){
	//var ctc=new Contact(contact);
	//ctc.save(contact,callback);
	Contact.create(contact,callback)
}
module.exports.getContactById=function(id,callback){
	var query={_id:id}
	Contact.findById(query,callback);
}

module.exports.updateContact=function(id,contact,callback){
Contact.update({_id:id},{$set:{
	name:contact.name,
	email:contact.email,
	mobile:contact.mobile
}},
callback)
}
module.exports.removeContact=function(id,callback){
	var query={_id:id};
	Contact.remove(query,callback);
}
