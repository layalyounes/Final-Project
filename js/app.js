
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {
		controller: 'homeView',
		templateUrl: '../html/home-view.html'
	})
	.when('contact', {
		controller: 'contactView',
		templateUrl: '../html/contact-view.html'
	})
	.when('app-view', {
		controller: 'resultView',
		templateUrl: '../html/app-view.html'
	})
	.otherwise({
		redirectTo: '../html/index.html'
	});
});