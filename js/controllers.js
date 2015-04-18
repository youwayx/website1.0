

var websiteControllers = angular.module('websiteControllers', []);

websiteControllers.controller('mainCtrl', ['$scope',
	function($scope) {

	}]);

websiteControllers.controller('projectsCtrl', ['$scope',
	function($scope) {
		$scope.projects = [
			{"name": "Groovie",
			"image": "img/groovie.png",
			"date":"March 2015",
			"type": "Android App",
			"description": "Groovie is an Android app that uses rates currently popular movies by \
							conducting sentiment analysis on latest tweets about the movie. Won the \
							Best Use of Mashape API prize at HackWestern."},
			{"name": "Roomi",
			"image": "img/roomi.png",
			"date":"Feb 2015",
			"type": "Meteor App",
			"description": "Roomi is a communication hub app for roomates built in Angular-Meteor. \
							It incorporates useful features such as group messenging, spliting bills, \
							and shared to-do lists. 2nd Prize at EngHack W15."}
		]
	}]);