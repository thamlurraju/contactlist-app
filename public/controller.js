var app=angular.module("myapp",[]);
app.controller("mycontroller",["$scope","$http",function($scope,$http){

var refresh=function(){
$http.get("/contactlist").success(function(res){

	$scope.contactlist=res;
	$scope.contact="";

})
}
refresh();
$scope.addcontact=function(){
	$http.post("/contactlist",$scope.contact).success(function(res){
		console.log(res)
		refresh();
	})
}

$scope.editContact=function(id){

	$http.get("/contactlist/"+id).success(function(res){
   $scope.contact=res;
	})
}
$scope.updateContact=function(){
	$http.put("/contactlist/"+$scope.contact._id,$scope.contact)
	.success(function(res){
		refresh();
	})
}
$scope.removeContact=function(id){
	$http.delete("/contactlist/"+id).success(function(res){
		refresh();
	})
}



}]);