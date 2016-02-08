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
 * Data Repeat module
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

/*
 * Filter Module 
 */
var filterApp = angular.module("filterModule",[]).controller("filterController", function($scope){
	
	var customers = [{name:"ranath perera",dob: new Date("January 28, 1982"), gender: "Male", total: 500, due: 150},
	                 {name:"Sidath Appu",dob: new Date("May 20, 1975"), gender: "Male", total: 600, due: 50},
	                 {name:"Susith mohan",dob: new Date("June 18, 1972"), gender: "Male", total: 400, due: 175},
	                 {name:"Lusa ukkua",dob: new Date("December 12, 1980"), gender: "Male", total: 1500, due: 350},
	                 {name:"Ranja Samaya",dob: new Date("May 17, 1982"), gender: "Male", total: 11500, due: 1350},
	                 {name:"Viji apa",dob: new Date("Octomber 26, 1972"), gender: "Male", total: 31500, due: 800},
	                 {name:"Sam aka",dob: new Date("June 30, 1962"), gender: "Male", total: 7500, due: 1750},
	                 {name:"beu rowana",dob: new Date("July 08, 1972"), gender: "Female", total: 1200, due: 550},
	                 ];
	
	$scope.customers = customers;
	$scope.rowLimit = 8;
	$scope.sortColumn = "name";
	
	$scope.reverseSort = false;
	$scope.sortData = function($column){
		$scope.reverseSort = ($column.sortColumn == $column) ? !$scope.reverseSort : false;
		$scope.sortColumn = $column;
	}

	$scope.getSortClass = function($column){
		if($scope.sortColumn == $column){
			return $scope.reverseSort ? "assending" : "descending"
		}
		return "";
	}
});



