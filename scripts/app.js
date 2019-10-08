angular.module("todoApp", [])
.controller("mainCtrl", function($scope) {
	$scope.helloWorld = function() {
		console.log("Senaxulia");
	};
})
.controller("actionsCtrl", function($scope) {
	$scope.edit = function() {
		console.log("edit");
	};
	$scope.save = function() {
		console.log("save");
	};
	$scope.delete = function() {
		console.log("delete");
	};
});
