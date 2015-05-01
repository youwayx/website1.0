
var websiteApp = angular.module('websiteApp', [
	'websiteControllers',
	'ngRoute'
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
		$locationProvider.html5Mode(true);

	});