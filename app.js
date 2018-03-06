var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {       
	$routeProvider.
    when('/', {
		templateUrl: 'templates/home.html',
		controller: 'homeCtrl',		
    }).
    otherwise({
    	redirectTo: '/'
    });	       
}]);