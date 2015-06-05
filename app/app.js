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
	var todayHere = moment();
	$scope.liveClock = function(){
		$scope.currDate = todayHere.format('MMM Do, YYYY')
		return moment().format('hh:mm:ss a');
	}


	function digestLive(){
		$timeout(digestLive, 1000);
	}

	digestLive();
}]);