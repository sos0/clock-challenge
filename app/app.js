'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.view1',
	'myApp.view2',
	'myApp.version'
]).config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/view1'});
}])
.controller('ClockController', ['$scope', '$timeout', function($scope, $timeout) {
	// Decided to use select rather than input field to limit user options.
	$scope.utcOptions = [-12,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1,0,
						 1,2,3,4,5,6,7,8,9,10,11,12,13,14];
	$scope.todayHere = moment();
	$scope.utc = moment().utcOffset();

	$scope.liveClock = function(){
		$scope.currDate = moment().utcOffset($scope.utc).format('MMM Do, YYYY');
		return moment().utcOffset($scope.utc).format('hh:mm:ss a');
	}

	$scope.updateClock = function(utc){
		$scope.utc = parseInt(utc);
		console.log("utc: ", $scope.utc)
		console.log(moment().utcOffset($scope.utc).format('MMM Do, YYYY'));
		console.log(moment().utcOffset($scope.utc).format('hh:mm:ss a'));
	}

	function digestLive(){
		$timeout(digestLive, 1000);
	}

	digestLive();
}]);