
var websiteApp = angular.module('websiteApp', [
	'ngRoute',
	'websiteControllers'
]);

websiteApp.config(
	function($routeProvider, $locationProvider) {
		
		$routeProvider
			.when('/', {
				templateUrl: '../partials/main-partial.html',
				controller: 'mainCtrl'
			})
			.when('/projects', {
				templateUrl: '../partials/projects-partial.html',
				controller: 'projectsCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});