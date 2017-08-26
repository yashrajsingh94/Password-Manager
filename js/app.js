var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
	console.log("In myController...");

	$scope.newUser = {};
	$scope.clickedUser = {};
	$scope.message = "";

	$scope.users = [
		{siteName: "Gmail",username: "rimon@gmail.com",  password: "rimon123"},
		{siteName: "Github", username: "xyz@yahoomail.com", password: "shamimbhatt"},
		{siteName: "Facebook", username: "rajnandan@hotmail.com", password: "raj_nandan"}
	];

	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser = {};
		$scope.message = "New User Added Successfully";
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(){
		$scope.message = "User Updated Successfully";

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
		$scope.message = "User Deleted Successfully";
	};
	
});