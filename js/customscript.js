/**
 * This is a custom script
 */

// / <reference path="angular.js"/>
/*
 * Creating the bootstrap module and Registering the controller to the module
 * using method chaining
 */
var myApp = angular.module("myModule", []).controller("myController",
		function($scope) {
			var person = {
				firstName : "vijitha",
				lastName : "epa",
				age : 35,
				photo : "../img/images.jpg"
			};
			$scope.message = "My First Angular JS app";
			$scope.person = person;
		});

/*
 * Data Binding module
 */
var dataApp = angular.module("dataModule", []).controller("dataController",
		function($scope) {
			$scope.message = "Hi Data Binding";
		});

/*
 * Data epeat module
 */
var dataApp = angular.module("dataRepeatModule", []).controller("dataRepeatController",
		function($scope) {
			var comapnies = [ {
				name : "ABC",
				employee : [ {name : "John McWeen"}, 
				             {name : "Michael Dan"}, 
				             {name : "Jane smith"} ]
				}, {
				name : "XYZ",
				employee : [ {name : "Peter Kuruwita"}, 
				             {name : "Feli Chang"} ]
				} ];

			$scope.comapnies = comapnies;
		});

/*
 * Data epeat module
 */
var dataApp = angular.module("eventModule", []).controller("eventController", function($scope) {
			var movies = [{name: "ET", like: 0, dislike: 0},
			              {name: "Start wars", like: 0, dislike: 0},
			              {name: "Rambo", like: 0, dislike: 0},
			              {name: "IP man", like: 0, dislike: 0}];
			$scope.movies = movies;
			
			$scope.likes = function($movie){
				$movie.like++;
			}
			
			$scope.dislikes = function($movie){
				$movie.dislike++;
			}
			
		});